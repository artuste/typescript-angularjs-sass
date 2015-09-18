import {App} from '../../App';
import {LoginCtrl} from './LoginCtrl';
import {LogoutCtrl} from './LogoutCtrl';
import {AuthenticationService} from './AuthenticationService';
import {WebStorageService} from './WebStorageService';

const module:angular.IModule = App.module('app.auth', []);

module
    .controller('Login', LoginCtrl)
    .controller('Logout', LogoutCtrl)
    .service('Authentication', AuthenticationService)
    .service('WebStorageService', WebStorageService)
    .config(($stateProvider:angular.ui.IStateProvider) => {
        $stateProvider
            .state('loginTemplate.login', {
                url: '/login',
                views: {
                    application: {
                        templateUrl: 'src/module/auth/Login.html',
                        controller: LoginCtrl,
                        controllerAs: 'vm'
                    }
                }
            }).state('loginTemplate.logout', {
                url: '/logout',
                views: {
                    application: {
                        controller: LogoutCtrl
                    }
                }
            });
    });
