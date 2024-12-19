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
                                            'data-bs-target="#controllers-links-module-AppModule-0afb37361c5bd95948b2773f5c6c7e57796f6b7b222f0b217d97cb559b7c09366639f8b8129f39d5816ae6ae094a0f462bbd0c6ad724d454631e578fff31ed25"' : 'data-bs-target="#xs-controllers-links-module-AppModule-0afb37361c5bd95948b2773f5c6c7e57796f6b7b222f0b217d97cb559b7c09366639f8b8129f39d5816ae6ae094a0f462bbd0c6ad724d454631e578fff31ed25"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-0afb37361c5bd95948b2773f5c6c7e57796f6b7b222f0b217d97cb559b7c09366639f8b8129f39d5816ae6ae094a0f462bbd0c6ad724d454631e578fff31ed25"' :
                                            'id="xs-controllers-links-module-AppModule-0afb37361c5bd95948b2773f5c6c7e57796f6b7b222f0b217d97cb559b7c09366639f8b8129f39d5816ae6ae094a0f462bbd0c6ad724d454631e578fff31ed25"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-0afb37361c5bd95948b2773f5c6c7e57796f6b7b222f0b217d97cb559b7c09366639f8b8129f39d5816ae6ae094a0f462bbd0c6ad724d454631e578fff31ed25"' : 'data-bs-target="#xs-injectables-links-module-AppModule-0afb37361c5bd95948b2773f5c6c7e57796f6b7b222f0b217d97cb559b7c09366639f8b8129f39d5816ae6ae094a0f462bbd0c6ad724d454631e578fff31ed25"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-0afb37361c5bd95948b2773f5c6c7e57796f6b7b222f0b217d97cb559b7c09366639f8b8129f39d5816ae6ae094a0f462bbd0c6ad724d454631e578fff31ed25"' :
                                        'id="xs-injectables-links-module-AppModule-0afb37361c5bd95948b2773f5c6c7e57796f6b7b222f0b217d97cb559b7c09366639f8b8129f39d5816ae6ae094a0f462bbd0c6ad724d454631e578fff31ed25"' }>
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
                                            'data-bs-target="#controllers-links-module-AuthModule-5d1fd19e40ddb68d08edfb1e27df1088ed68f709d6121bfdd490cd8687116e4495fb2f168fc8cbe52089aefe4f70373c213020402032ab132ca8051d80c46d0e"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-5d1fd19e40ddb68d08edfb1e27df1088ed68f709d6121bfdd490cd8687116e4495fb2f168fc8cbe52089aefe4f70373c213020402032ab132ca8051d80c46d0e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-5d1fd19e40ddb68d08edfb1e27df1088ed68f709d6121bfdd490cd8687116e4495fb2f168fc8cbe52089aefe4f70373c213020402032ab132ca8051d80c46d0e"' :
                                            'id="xs-controllers-links-module-AuthModule-5d1fd19e40ddb68d08edfb1e27df1088ed68f709d6121bfdd490cd8687116e4495fb2f168fc8cbe52089aefe4f70373c213020402032ab132ca8051d80c46d0e"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-5d1fd19e40ddb68d08edfb1e27df1088ed68f709d6121bfdd490cd8687116e4495fb2f168fc8cbe52089aefe4f70373c213020402032ab132ca8051d80c46d0e"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-5d1fd19e40ddb68d08edfb1e27df1088ed68f709d6121bfdd490cd8687116e4495fb2f168fc8cbe52089aefe4f70373c213020402032ab132ca8051d80c46d0e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-5d1fd19e40ddb68d08edfb1e27df1088ed68f709d6121bfdd490cd8687116e4495fb2f168fc8cbe52089aefe4f70373c213020402032ab132ca8051d80c46d0e"' :
                                        'id="xs-injectables-links-module-AuthModule-5d1fd19e40ddb68d08edfb1e27df1088ed68f709d6121bfdd490cd8687116e4495fb2f168fc8cbe52089aefe4f70373c213020402032ab132ca8051d80c46d0e"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MetaOptionsModule.html" data-type="entity-link" >MetaOptionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MetaOptionsModule-3f7b5340cd70a304c31e50409f1ecb8b6689bed361f3404dac7089ed6115d05070180dc3e2b3d5b16fbbc3be3ffbf37a94cbda5a0dea7bac1fedc2e9f6fa7ce6"' : 'data-bs-target="#xs-controllers-links-module-MetaOptionsModule-3f7b5340cd70a304c31e50409f1ecb8b6689bed361f3404dac7089ed6115d05070180dc3e2b3d5b16fbbc3be3ffbf37a94cbda5a0dea7bac1fedc2e9f6fa7ce6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MetaOptionsModule-3f7b5340cd70a304c31e50409f1ecb8b6689bed361f3404dac7089ed6115d05070180dc3e2b3d5b16fbbc3be3ffbf37a94cbda5a0dea7bac1fedc2e9f6fa7ce6"' :
                                            'id="xs-controllers-links-module-MetaOptionsModule-3f7b5340cd70a304c31e50409f1ecb8b6689bed361f3404dac7089ed6115d05070180dc3e2b3d5b16fbbc3be3ffbf37a94cbda5a0dea7bac1fedc2e9f6fa7ce6"' }>
                                            <li class="link">
                                                <a href="controllers/MetaOptionsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MetaOptionsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MetaOptionsModule-3f7b5340cd70a304c31e50409f1ecb8b6689bed361f3404dac7089ed6115d05070180dc3e2b3d5b16fbbc3be3ffbf37a94cbda5a0dea7bac1fedc2e9f6fa7ce6"' : 'data-bs-target="#xs-injectables-links-module-MetaOptionsModule-3f7b5340cd70a304c31e50409f1ecb8b6689bed361f3404dac7089ed6115d05070180dc3e2b3d5b16fbbc3be3ffbf37a94cbda5a0dea7bac1fedc2e9f6fa7ce6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MetaOptionsModule-3f7b5340cd70a304c31e50409f1ecb8b6689bed361f3404dac7089ed6115d05070180dc3e2b3d5b16fbbc3be3ffbf37a94cbda5a0dea7bac1fedc2e9f6fa7ce6"' :
                                        'id="xs-injectables-links-module-MetaOptionsModule-3f7b5340cd70a304c31e50409f1ecb8b6689bed361f3404dac7089ed6115d05070180dc3e2b3d5b16fbbc3be3ffbf37a94cbda5a0dea7bac1fedc2e9f6fa7ce6"' }>
                                        <li class="link">
                                            <a href="injectables/MetaOptionsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MetaOptionsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-68210ef382053123cf147de6816fa8ff3b45ac69412bd775c3c7cad2747e9748b7a687ec9cddc72ddb665cd4b7631593cb346e12edfe334f499774bf744d6c06"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-68210ef382053123cf147de6816fa8ff3b45ac69412bd775c3c7cad2747e9748b7a687ec9cddc72ddb665cd4b7631593cb346e12edfe334f499774bf744d6c06"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-68210ef382053123cf147de6816fa8ff3b45ac69412bd775c3c7cad2747e9748b7a687ec9cddc72ddb665cd4b7631593cb346e12edfe334f499774bf744d6c06"' :
                                            'id="xs-controllers-links-module-PostsModule-68210ef382053123cf147de6816fa8ff3b45ac69412bd775c3c7cad2747e9748b7a687ec9cddc72ddb665cd4b7631593cb346e12edfe334f499774bf744d6c06"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-68210ef382053123cf147de6816fa8ff3b45ac69412bd775c3c7cad2747e9748b7a687ec9cddc72ddb665cd4b7631593cb346e12edfe334f499774bf744d6c06"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-68210ef382053123cf147de6816fa8ff3b45ac69412bd775c3c7cad2747e9748b7a687ec9cddc72ddb665cd4b7631593cb346e12edfe334f499774bf744d6c06"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-68210ef382053123cf147de6816fa8ff3b45ac69412bd775c3c7cad2747e9748b7a687ec9cddc72ddb665cd4b7631593cb346e12edfe334f499774bf744d6c06"' :
                                        'id="xs-injectables-links-module-PostsModule-68210ef382053123cf147de6816fa8ff3b45ac69412bd775c3c7cad2747e9748b7a687ec9cddc72ddb665cd4b7631593cb346e12edfe334f499774bf744d6c06"' }>
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
                                            'data-bs-target="#controllers-links-module-TagsModule-98afc85582074152627a7d8b70bf7290435a5e74ad4430211cce90188677285fc191ff2bf181290d1b76e7cda8114cc4ace1d53c40f5bc101a54c30ece26896e"' : 'data-bs-target="#xs-controllers-links-module-TagsModule-98afc85582074152627a7d8b70bf7290435a5e74ad4430211cce90188677285fc191ff2bf181290d1b76e7cda8114cc4ace1d53c40f5bc101a54c30ece26896e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TagsModule-98afc85582074152627a7d8b70bf7290435a5e74ad4430211cce90188677285fc191ff2bf181290d1b76e7cda8114cc4ace1d53c40f5bc101a54c30ece26896e"' :
                                            'id="xs-controllers-links-module-TagsModule-98afc85582074152627a7d8b70bf7290435a5e74ad4430211cce90188677285fc191ff2bf181290d1b76e7cda8114cc4ace1d53c40f5bc101a54c30ece26896e"' }>
                                            <li class="link">
                                                <a href="controllers/TagsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TagsModule-98afc85582074152627a7d8b70bf7290435a5e74ad4430211cce90188677285fc191ff2bf181290d1b76e7cda8114cc4ace1d53c40f5bc101a54c30ece26896e"' : 'data-bs-target="#xs-injectables-links-module-TagsModule-98afc85582074152627a7d8b70bf7290435a5e74ad4430211cce90188677285fc191ff2bf181290d1b76e7cda8114cc4ace1d53c40f5bc101a54c30ece26896e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TagsModule-98afc85582074152627a7d8b70bf7290435a5e74ad4430211cce90188677285fc191ff2bf181290d1b76e7cda8114cc4ace1d53c40f5bc101a54c30ece26896e"' :
                                        'id="xs-injectables-links-module-TagsModule-98afc85582074152627a7d8b70bf7290435a5e74ad4430211cce90188677285fc191ff2bf181290d1b76e7cda8114cc4ace1d53c40f5bc101a54c30ece26896e"' }>
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
                                            'data-bs-target="#controllers-links-module-UsersModule-0d17d450ffeba57f6c2fbb8d13fb845246dc996cfe2f84b058caa58ac75c6e30dc8312c2b5ca896f9fcbb22a795daf7c363cb19d31a4a16cd4e9c02331aaa86c"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-0d17d450ffeba57f6c2fbb8d13fb845246dc996cfe2f84b058caa58ac75c6e30dc8312c2b5ca896f9fcbb22a795daf7c363cb19d31a4a16cd4e9c02331aaa86c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-0d17d450ffeba57f6c2fbb8d13fb845246dc996cfe2f84b058caa58ac75c6e30dc8312c2b5ca896f9fcbb22a795daf7c363cb19d31a4a16cd4e9c02331aaa86c"' :
                                            'id="xs-controllers-links-module-UsersModule-0d17d450ffeba57f6c2fbb8d13fb845246dc996cfe2f84b058caa58ac75c6e30dc8312c2b5ca896f9fcbb22a795daf7c363cb19d31a4a16cd4e9c02331aaa86c"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-0d17d450ffeba57f6c2fbb8d13fb845246dc996cfe2f84b058caa58ac75c6e30dc8312c2b5ca896f9fcbb22a795daf7c363cb19d31a4a16cd4e9c02331aaa86c"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-0d17d450ffeba57f6c2fbb8d13fb845246dc996cfe2f84b058caa58ac75c6e30dc8312c2b5ca896f9fcbb22a795daf7c363cb19d31a4a16cd4e9c02331aaa86c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-0d17d450ffeba57f6c2fbb8d13fb845246dc996cfe2f84b058caa58ac75c6e30dc8312c2b5ca896f9fcbb22a795daf7c363cb19d31a4a16cd4e9c02331aaa86c"' :
                                        'id="xs-injectables-links-module-UsersModule-0d17d450ffeba57f6c2fbb8d13fb845246dc996cfe2f84b058caa58ac75c6e30dc8312c2b5ca896f9fcbb22a795daf7c363cb19d31a4a16cd4e9c02331aaa86c"' }>
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
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostMetaOptionsDto.html" data-type="entity-link" >CreatePostMetaOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTagDto.html" data-type="entity-link" >CreateTagDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUsersParamsDto.html" data-type="entity-link" >GetUsersParamsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchPostDto.html" data-type="entity-link" >PatchPostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUserDto.html" data-type="entity-link" >PatchUserDto</a>
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
                                    <a href="injectables/MetaOptionsService.html" data-type="entity-link" >MetaOptionsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostsService.html" data-type="entity-link" >PostsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TagsService.html" data-type="entity-link" >TagsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
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