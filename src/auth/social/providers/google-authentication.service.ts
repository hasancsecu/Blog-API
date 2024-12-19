import {
  forwardRef,
  Inject,
  Injectable,
  OnModuleInit,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { OAuth2Client } from 'google-auth-library';
import jwtConfig from 'src/auth/config/jwt.config';
import { GoogleTokenDto } from '../dtos/google-token.dto';
import { UsersService } from 'src/users/providers/users.service';
import { GenerateTokensProvider } from 'src/auth/providers/generate-tokens.provider';
import { User } from 'src/users/user.entity';

@Injectable()
export class GoogleAuthenticationService implements OnModuleInit {
  private oAuthClient: OAuth2Client;

  constructor(
    @Inject(jwtConfig.KEY)
    private readonly jwtConfiguration: ConfigType<typeof jwtConfig>,
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
    private readonly generateTokensProvider: GenerateTokensProvider,
  ) {}

  onModuleInit() {
    const clientId = this.jwtConfiguration.googleClientId;
    const clientSecret = this.jwtConfiguration.googleClientSecret;
    this.oAuthClient = new OAuth2Client(clientId, clientSecret);
  }

  public async authenticate(googleTokenDto: GoogleTokenDto) {
    try {
      const logInTicket = await this.oAuthClient.verifyIdToken({
        idToken: googleTokenDto.token,
      });

      const {
        email,
        sub: googleId,
        given_name: firstName,
        family_name: lastName,
      } = logInTicket.getPayload();

      let user: User = await this.usersService.findOneByGoogleId(googleId);
      if (user) {
        return this.generateTokensProvider.generateTokens(user);
      }

      let newUser = await this.usersService.createGoogleUser({
        email,
        googleId,
        firstName,
        lastName,
      });

      return this.generateTokensProvider.generateTokens(newUser);
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }
}