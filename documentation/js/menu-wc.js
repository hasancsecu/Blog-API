'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">blog-api documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-769cb46e235d41a748199dff8d786101a46d564119d229f3907fce6c966f3a91b74ca6fc150f683b87d1390cdcee316f7e079908f5559328d6c34ba3b752c340"' : 'data-bs-target="#xs-controllers-links-module-AppModule-769cb46e235d41a748199dff8d786101a46d564119d229f3907fce6c966f3a91b74ca6fc150f683b87d1390cdcee316f7e079908f5559328d6c34ba3b752c340"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-769cb46e235d41a748199dff8d786101a46d564119d229f3907fce6c966f3a91b74ca6fc150f683b87d1390cdcee316f7e079908f5559328d6c34ba3b752c340"' :
                                            'id="xs-controllers-links-module-AppModule-769cb46e235d41a748199dff8d786101a46d564119d229f3907fce6c966f3a91b74ca6fc150f683b87d1390cdcee316f7e079908f5559328d6c34ba3b752c340"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-769cb46e235d41a748199dff8d786101a46d564119d229f3907fce6c966f3a91b74ca6fc150f683b87d1390cdcee316f7e079908f5559328d6c34ba3b752c340"' : 'data-bs-target="#xs-injectables-links-module-AppModule-769cb46e235d41a748199dff8d786101a46d564119d229f3907fce6c966f3a91b74ca6fc150f683b87d1390cdcee316f7e079908f5559328d6c34ba3b752c340"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-769cb46e235d41a748199dff8d786101a46d564119d229f3907fce6c966f3a91b74ca6fc150f683b87d1390cdcee316f7e079908f5559328d6c34ba3b752c340"' :
                                        'id="xs-injectables-links-module-AppModule-769cb46e235d41a748199dff8d786101a46d564119d229f3907fce6c966f3a91b74ca6fc150f683b87d1390cdcee316f7e079908f5559328d6c34ba3b752c340"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-477cd0966fc8dbe9d979de3afb97c9f72f3e9e0bfcde31f3be7d4d6ee6e5f26c50a813ccf850162d0bad74f6d2e8d958c71d0b7bf951a43d0c817fe73201f39b"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-477cd0966fc8dbe9d979de3afb97c9f72f3e9e0bfcde31f3be7d4d6ee6e5f26c50a813ccf850162d0bad74f6d2e8d958c71d0b7bf951a43d0c817fe73201f39b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-477cd0966fc8dbe9d979de3afb97c9f72f3e9e0bfcde31f3be7d4d6ee6e5f26c50a813ccf850162d0bad74f6d2e8d958c71d0b7bf951a43d0c817fe73201f39b"' :
                                            'id="xs-controllers-links-module-AuthModule-477cd0966fc8dbe9d979de3afb97c9f72f3e9e0bfcde31f3be7d4d6ee6e5f26c50a813ccf850162d0bad74f6d2e8d958c71d0b7bf951a43d0c817fe73201f39b"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/GoogleAuthenticationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GoogleAuthenticationController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-477cd0966fc8dbe9d979de3afb97c9f72f3e9e0bfcde31f3be7d4d6ee6e5f26c50a813ccf850162d0bad74f6d2e8d958c71d0b7bf951a43d0c817fe73201f39b"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-477cd0966fc8dbe9d979de3afb97c9f72f3e9e0bfcde31f3be7d4d6ee6e5f26c50a813ccf850162d0bad74f6d2e8d958c71d0b7bf951a43d0c817fe73201f39b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-477cd0966fc8dbe9d979de3afb97c9f72f3e9e0bfcde31f3be7d4d6ee6e5f26c50a813ccf850162d0bad74f6d2e8d958c71d0b7bf951a43d0c817fe73201f39b"' :
                                        'id="xs-injectables-links-module-AuthModule-477cd0966fc8dbe9d979de3afb97c9f72f3e9e0bfcde31f3be7d4d6ee6e5f26c50a813ccf850162d0bad74f6d2e8d958c71d0b7bf951a43d0c817fe73201f39b"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GenerateTokensProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GenerateTokensProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GoogleAuthenticationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GoogleAuthenticationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RefreshTokensProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RefreshTokensProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SignInProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignInProvider</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MailModule.html" data-type="entity-link" >MailModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MailModule-3a62dfe06134b1db2aead4e238e04c913e6d9b6678aa13ae6becd0351660730c2869f23d7e62129b2028099dc9244063182b33b4cbef70e3fd0c191e66ed2db8"' : 'data-bs-target="#xs-injectables-links-module-MailModule-3a62dfe06134b1db2aead4e238e04c913e6d9b6678aa13ae6becd0351660730c2869f23d7e62129b2028099dc9244063182b33b4cbef70e3fd0c191e66ed2db8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MailModule-3a62dfe06134b1db2aead4e238e04c913e6d9b6678aa13ae6becd0351660730c2869f23d7e62129b2028099dc9244063182b33b4cbef70e3fd0c191e66ed2db8"' :
                                        'id="xs-injectables-links-module-MailModule-3a62dfe06134b1db2aead4e238e04c913e6d9b6678aa13ae6becd0351660730c2869f23d7e62129b2028099dc9244063182b33b4cbef70e3fd0c191e66ed2db8"' }>
                                        <li class="link">
                                            <a href="injectables/MailService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MailService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MetaOptionsModule.html" data-type="entity-link" >MetaOptionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MetaOptionsModule-40fb4756641a40c76b420df36e471785516124a9597d2440c897947b2ea5ea6afd07d939058f69f3d8be42cb3621fb98b3bc1d9e0c1554b2dedd100350b75abd"' : 'data-bs-target="#xs-controllers-links-module-MetaOptionsModule-40fb4756641a40c76b420df36e471785516124a9597d2440c897947b2ea5ea6afd07d939058f69f3d8be42cb3621fb98b3bc1d9e0c1554b2dedd100350b75abd"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MetaOptionsModule-40fb4756641a40c76b420df36e471785516124a9597d2440c897947b2ea5ea6afd07d939058f69f3d8be42cb3621fb98b3bc1d9e0c1554b2dedd100350b75abd"' :
                                            'id="xs-controllers-links-module-MetaOptionsModule-40fb4756641a40c76b420df36e471785516124a9597d2440c897947b2ea5ea6afd07d939058f69f3d8be42cb3621fb98b3bc1d9e0c1554b2dedd100350b75abd"' }>
                                            <li class="link">
                                                <a href="controllers/MetaOptionsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MetaOptionsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MetaOptionsModule-40fb4756641a40c76b420df36e471785516124a9597d2440c897947b2ea5ea6afd07d939058f69f3d8be42cb3621fb98b3bc1d9e0c1554b2dedd100350b75abd"' : 'data-bs-target="#xs-injectables-links-module-MetaOptionsModule-40fb4756641a40c76b420df36e471785516124a9597d2440c897947b2ea5ea6afd07d939058f69f3d8be42cb3621fb98b3bc1d9e0c1554b2dedd100350b75abd"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MetaOptionsModule-40fb4756641a40c76b420df36e471785516124a9597d2440c897947b2ea5ea6afd07d939058f69f3d8be42cb3621fb98b3bc1d9e0c1554b2dedd100350b75abd"' :
                                        'id="xs-injectables-links-module-MetaOptionsModule-40fb4756641a40c76b420df36e471785516124a9597d2440c897947b2ea5ea6afd07d939058f69f3d8be42cb3621fb98b3bc1d9e0c1554b2dedd100350b75abd"' }>
                                        <li class="link">
                                            <a href="injectables/MetaOptionsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MetaOptionsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PaginationModule.html" data-type="entity-link" >PaginationModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PaginationModule-c999ec83fa446b9ea19d24ee0a6e56c581d86a5632cf36ae10c29d023d3c04796a0ed53a4d793419d8e1b10f6bd03438e096eafb9c8ddd56a9755c3470044f4b"' : 'data-bs-target="#xs-injectables-links-module-PaginationModule-c999ec83fa446b9ea19d24ee0a6e56c581d86a5632cf36ae10c29d023d3c04796a0ed53a4d793419d8e1b10f6bd03438e096eafb9c8ddd56a9755c3470044f4b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PaginationModule-c999ec83fa446b9ea19d24ee0a6e56c581d86a5632cf36ae10c29d023d3c04796a0ed53a4d793419d8e1b10f6bd03438e096eafb9c8ddd56a9755c3470044f4b"' :
                                        'id="xs-injectables-links-module-PaginationModule-c999ec83fa446b9ea19d24ee0a6e56c581d86a5632cf36ae10c29d023d3c04796a0ed53a4d793419d8e1b10f6bd03438e096eafb9c8ddd56a9755c3470044f4b"' }>
                                        <li class="link">
                                            <a href="injectables/PaginationProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaginationProvider</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-65214db1273b7a7d79f688b2de5075132a7009e148cd91f09a6559a0df4775f2417baaa4bd257b329aaf289cebf0bb13691d592360cc85ff88f9f29371603b17"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-65214db1273b7a7d79f688b2de5075132a7009e148cd91f09a6559a0df4775f2417baaa4bd257b329aaf289cebf0bb13691d592360cc85ff88f9f29371603b17"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-65214db1273b7a7d79f688b2de5075132a7009e148cd91f09a6559a0df4775f2417baaa4bd257b329aaf289cebf0bb13691d592360cc85ff88f9f29371603b17"' :
                                            'id="xs-controllers-links-module-PostsModule-65214db1273b7a7d79f688b2de5075132a7009e148cd91f09a6559a0df4775f2417baaa4bd257b329aaf289cebf0bb13691d592360cc85ff88f9f29371603b17"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-65214db1273b7a7d79f688b2de5075132a7009e148cd91f09a6559a0df4775f2417baaa4bd257b329aaf289cebf0bb13691d592360cc85ff88f9f29371603b17"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-65214db1273b7a7d79f688b2de5075132a7009e148cd91f09a6559a0df4775f2417baaa4bd257b329aaf289cebf0bb13691d592360cc85ff88f9f29371603b17"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-65214db1273b7a7d79f688b2de5075132a7009e148cd91f09a6559a0df4775f2417baaa4bd257b329aaf289cebf0bb13691d592360cc85ff88f9f29371603b17"' :
                                        'id="xs-injectables-links-module-PostsModule-65214db1273b7a7d79f688b2de5075132a7009e148cd91f09a6559a0df4775f2417baaa4bd257b329aaf289cebf0bb13691d592360cc85ff88f9f29371603b17"' }>
                                        <li class="link">
                                            <a href="injectables/CreatePostProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreatePostProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TagsModule.html" data-type="entity-link" >TagsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-TagsModule-cc2cdb5889aa97e83c68e9d650b05ad2ae7a3a2d4f5d59d5a65cf378994bee18e395f36ef246f674a8a5d37f0bcd8b566266e82efed948deb573f9f8e58c238d"' : 'data-bs-target="#xs-controllers-links-module-TagsModule-cc2cdb5889aa97e83c68e9d650b05ad2ae7a3a2d4f5d59d5a65cf378994bee18e395f36ef246f674a8a5d37f0bcd8b566266e82efed948deb573f9f8e58c238d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TagsModule-cc2cdb5889aa97e83c68e9d650b05ad2ae7a3a2d4f5d59d5a65cf378994bee18e395f36ef246f674a8a5d37f0bcd8b566266e82efed948deb573f9f8e58c238d"' :
                                            'id="xs-controllers-links-module-TagsModule-cc2cdb5889aa97e83c68e9d650b05ad2ae7a3a2d4f5d59d5a65cf378994bee18e395f36ef246f674a8a5d37f0bcd8b566266e82efed948deb573f9f8e58c238d"' }>
                                            <li class="link">
                                                <a href="controllers/TagsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TagsModule-cc2cdb5889aa97e83c68e9d650b05ad2ae7a3a2d4f5d59d5a65cf378994bee18e395f36ef246f674a8a5d37f0bcd8b566266e82efed948deb573f9f8e58c238d"' : 'data-bs-target="#xs-injectables-links-module-TagsModule-cc2cdb5889aa97e83c68e9d650b05ad2ae7a3a2d4f5d59d5a65cf378994bee18e395f36ef246f674a8a5d37f0bcd8b566266e82efed948deb573f9f8e58c238d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TagsModule-cc2cdb5889aa97e83c68e9d650b05ad2ae7a3a2d4f5d59d5a65cf378994bee18e395f36ef246f674a8a5d37f0bcd8b566266e82efed948deb573f9f8e58c238d"' :
                                        'id="xs-injectables-links-module-TagsModule-cc2cdb5889aa97e83c68e9d650b05ad2ae7a3a2d4f5d59d5a65cf378994bee18e395f36ef246f674a8a5d37f0bcd8b566266e82efed948deb573f9f8e58c238d"' }>
                                        <li class="link">
                                            <a href="injectables/TagsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-dc8e280ecb5782a49b3ed4423fca8a8e01227b83d7f844b3127ada7a42a1cc79c34c2b0f2a2828a91a599c06740c76976028c57e71d7800fa065e633fd35ad34"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-dc8e280ecb5782a49b3ed4423fca8a8e01227b83d7f844b3127ada7a42a1cc79c34c2b0f2a2828a91a599c06740c76976028c57e71d7800fa065e633fd35ad34"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-dc8e280ecb5782a49b3ed4423fca8a8e01227b83d7f844b3127ada7a42a1cc79c34c2b0f2a2828a91a599c06740c76976028c57e71d7800fa065e633fd35ad34"' :
                                            'id="xs-controllers-links-module-UsersModule-dc8e280ecb5782a49b3ed4423fca8a8e01227b83d7f844b3127ada7a42a1cc79c34c2b0f2a2828a91a599c06740c76976028c57e71d7800fa065e633fd35ad34"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-dc8e280ecb5782a49b3ed4423fca8a8e01227b83d7f844b3127ada7a42a1cc79c34c2b0f2a2828a91a599c06740c76976028c57e71d7800fa065e633fd35ad34"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-dc8e280ecb5782a49b3ed4423fca8a8e01227b83d7f844b3127ada7a42a1cc79c34c2b0f2a2828a91a599c06740c76976028c57e71d7800fa065e633fd35ad34"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-dc8e280ecb5782a49b3ed4423fca8a8e01227b83d7f844b3127ada7a42a1cc79c34c2b0f2a2828a91a599c06740c76976028c57e71d7800fa065e633fd35ad34"' :
                                        'id="xs-injectables-links-module-UsersModule-dc8e280ecb5782a49b3ed4423fca8a8e01227b83d7f844b3127ada7a42a1cc79c34c2b0f2a2828a91a599c06740c76976028c57e71d7800fa065e633fd35ad34"' }>
                                        <li class="link">
                                            <a href="injectables/CreateGoogleUserProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateGoogleUserProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CreateUserProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateUserProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FindOneByGoogleIdProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FindOneByGoogleIdProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FindOneUserByEmailProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FindOneUserByEmailProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersCreateManyProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersCreateManyProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/GoogleAuthenticationController.html" data-type="entity-link" >GoogleAuthenticationController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/MetaOptionsController.html" data-type="entity-link" >MetaOptionsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PostsController.html" data-type="entity-link" >PostsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TagsController.html" data-type="entity-link" >TagsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/MetaOption.html" data-type="entity-link" >MetaOption</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Post.html" data-type="entity-link" >Post</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Tag.html" data-type="entity-link" >Tag</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateGoogleUserDto.html" data-type="entity-link" >CreateGoogleUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateManyUsersDto.html" data-type="entity-link" >CreateManyUsersDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostMetaOptionsDto.html" data-type="entity-link" >CreatePostMetaOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostMetaOptionsDto-1.html" data-type="entity-link" >CreatePostMetaOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTagDto.html" data-type="entity-link" >CreateTagDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetPostsBaseDto.html" data-type="entity-link" >GetPostsBaseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetPostsBaseDto-1.html" data-type="entity-link" >GetPostsBaseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetPostsDto.html" data-type="entity-link" >GetPostsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetPostsDto-1.html" data-type="entity-link" >GetPostsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUsersParamDto.html" data-type="entity-link" >GetUsersParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUsersParamsDto.html" data-type="entity-link" >GetUsersParamsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GoogleTokenDto.html" data-type="entity-link" >GoogleTokenDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaginationQueryDto.html" data-type="entity-link" >PaginationQueryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchPostDto.html" data-type="entity-link" >PatchPostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUserDto.html" data-type="entity-link" >PatchUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUserDto-1.html" data-type="entity-link" >PatchUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RefreshTokenDto.html" data-type="entity-link" >RefreshTokenDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignInDto.html" data-type="entity-link" >SignInDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BcryptProvider.html" data-type="entity-link" >BcryptProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CreateGoogleUserProvider.html" data-type="entity-link" >CreateGoogleUserProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CreatePostProvider.html" data-type="entity-link" >CreatePostProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CreateUserProvider.html" data-type="entity-link" >CreateUserProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CreateUsersManyProvoder.html" data-type="entity-link" >CreateUsersManyProvoder</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DataResponseInterceptor.html" data-type="entity-link" >DataResponseInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FindOneByGoogleIdProvider.html" data-type="entity-link" >FindOneByGoogleIdProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FindOneUserByEmailProvider.html" data-type="entity-link" >FindOneUserByEmailProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GenerateTokensProvider.html" data-type="entity-link" >GenerateTokensProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GoogleAuthenticationService.html" data-type="entity-link" >GoogleAuthenticationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HashingProvider.html" data-type="entity-link" >HashingProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MailService.html" data-type="entity-link" >MailService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MetaOptionsService.html" data-type="entity-link" >MetaOptionsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PaginationProvider.html" data-type="entity-link" >PaginationProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostsService.html" data-type="entity-link" >PostsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RefreshTokensProvider.html" data-type="entity-link" >RefreshTokensProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SignInProvider.html" data-type="entity-link" >SignInProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TagsService.html" data-type="entity-link" >TagsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersCreateManyProvider.html" data-type="entity-link" >UsersCreateManyProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AccessTokenGuard.html" data-type="entity-link" >AccessTokenGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/AuthenticationGuard.html" data-type="entity-link" >AuthenticationGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ActiveUserData.html" data-type="entity-link" >ActiveUserData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Paginated.html" data-type="entity-link" >Paginated</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});