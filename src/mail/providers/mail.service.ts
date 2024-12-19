import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { User } from 'src/users/user.entity';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  public async sendWelcomeMail(user: User) {
    await this.mailerService.sendMail({
      to: user.email,
      subject: 'Welcome to nestjs blog',
      template: './welcome',
      context: {
        email: user.email,
        name: user.firstName,
        loginUrl: 'http://localhost:3000',
      },
    });
  }
}
