var LoginCtrl = (function () {
    function LoginCtrl($filter, $state, Authentication, WebStorageService) {
        this.$filter = $filter;
        this.$state = $state;
        this.Authentication = Authentication;
        this.WebStorageService = WebStorageService;
        var vm = this;
        vm.loginForm = {};
        this.Authentication.getInfo()
            .then(function (response) {
            if (response) {
                $state.go('main.home');
            }
        });
    }
    LoginCtrl.prototype.login = function (form) {
        var self = this;
        this.Authentication.login(form)
            .then(function (response) {
            var stringified = JSON.stringify(response);
            self.WebStorageService.set(stringified);
            self.$state.go('main.home');
        });
    };
    LoginCtrl.$inject = ['$filter', '$state', 'Authentication', 'WebStorageService'];
    return LoginCtrl;
})();
exports.LoginCtrl = LoginCtrl;
//# sourceMappingURL=LoginCtrl.js.map