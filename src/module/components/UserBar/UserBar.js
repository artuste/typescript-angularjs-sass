define(["require", "exports", '../../../App', './UserBarComponent', '../../auth/AuthenticationService'], function (require, exports, App_1, UserBarComponent_1, AuthenticationService_1) {
    var module = App_1.App.module('com.userBar', []);
    module
        .directive('comUserBar', UserBarComponent_1.UserBarComponent)
        .service('AuthenticationService', AuthenticationService_1.AuthenticationService);
});
//# sourceMappingURL=UserBar.js.map