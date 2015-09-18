define(["require", "exports"], function (require, exports) {
    var LoginCtrl = (function () {
        function LoginCtrl($filter, $state, Authentication, WebStorageService) {
            this.$filter = $filter;
            this.$state = $state;
            this.Authentication = Authentication;
            this.WebStorageService = WebStorageService;
            var vm = this;
            //vm.loginForm = {};
            // Maybe move somewhere else ...
            this.Authentication.getInfo()
                .then(function (response) {
                if (response) {
                    $state.go('main.home');
                }
            });
        }
        LoginCtrl.prototype.login = function () {
            this.WebStorageService.set(JSON.stringify({ user: 'User1', token: 'token-1' }));
            this.$state.go('main.home');
        };
        LoginCtrl.$inject = ['$filter', '$state', 'Authentication', 'WebStorageService'];
        return LoginCtrl;
    })();
    exports.LoginCtrl = LoginCtrl;
});
//# sourceMappingURL=LoginCtrl.js.map