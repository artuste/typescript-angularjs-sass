define(["require", "exports"], function (require, exports) {
    var AuthenticationService = (function () {
        function AuthenticationService($http, $q, URLS, WebStorageService) {
            var _this = this;
            this.$http = $http;
            this.$q = $q;
            this.URLS = URLS;
            this.WebStorageService = WebStorageService;
            this.getInfo = function () {
                var deferred = _this.$q.defer();
                deferred.resolve(_this.WebStorageService.get());
                return deferred.promise;
            };
            this.login = function (form) {
                var mockResponse = {
                    user: form.username,
                    token: 'Token-' + Math.floor(Math.random() * 1000000)
                };
                var deferred = _this.$q.defer();
                deferred.resolve(mockResponse);
                return deferred.promise;
            };
            this.logout = function () {
                var action = _this.WebStorageService.remove();
                var deferred = _this.$q.defer();
                deferred.resolve(action);
                return deferred.promise;
            };
        }
        AuthenticationService.$inject = ['$http', '$q', 'URLS', 'WebStorageService'];
        return AuthenticationService;
    })();
    exports.AuthenticationService = AuthenticationService;
});
//# sourceMappingURL=AuthenticationService.js.map