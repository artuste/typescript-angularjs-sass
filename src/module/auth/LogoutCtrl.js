define(["require", "exports"], function (require, exports) {
    var LogoutCtrl = (function () {
        function LogoutCtrl($filter, $state, toastr, Authentication) {
            this.$filter = $filter;
            this.$state = $state;
            this.toastr = toastr;
            this.Authentication = Authentication;
            Authentication.logout()
                .then(function () {
                var message = $filter('translate')('MESSAGES.LOGGEDOUT');
                $state.go('loginTemplate.login');
                toastr.success(message);
            });
        }
        return LogoutCtrl;
    })();
    exports.LogoutCtrl = LogoutCtrl;
});
//# sourceMappingURL=LogoutCtrl.js.map