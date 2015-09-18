define(["require", "exports", '../../App', './LoginCtrl', './LogoutCtrl', './AuthenticationService', './WebStorageService'], function (require, exports, App_1, LoginCtrl_1, LogoutCtrl_1, AuthenticationService_1, WebStorageService_1) {
    var module = App_1.App.module('app.auth', []);
    module
        .controller('Login', LoginCtrl_1.LoginCtrl)
        .controller('Logout', LogoutCtrl_1.LogoutCtrl)
        .service('Authentication', AuthenticationService_1.AuthenticationService)
        .service('WebStorageService', WebStorageService_1.WebStorageService)
        .config(function ($stateProvider) {
        $stateProvider
            .state('loginTemplate.login', {
            url: '/login',
            views: {
                application: {
                    templateUrl: 'src/module/auth/Login.html',
                    controller: LoginCtrl_1.LoginCtrl,
                    controllerAs: 'vm'
                }
            }
        }).state('loginTemplate.logout', {
            url: '/logout',
            views: {
                application: {
                    controller: LogoutCtrl_1.LogoutCtrl
                }
            }
        });
    });
});
//# sourceMappingURL=Authentication.js.map