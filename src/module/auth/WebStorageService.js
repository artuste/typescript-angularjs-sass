define(["require", "exports"], function (require, exports) {
    var WebStorageService = (function () {
        function WebStorageService($window) {
            this.$window = $window;
        }
        WebStorageService.prototype.set = function (data) {
            this.$window.sessionStorage['userInfo'] = data;
        };
        WebStorageService.prototype.get = function () {
            return this.$window.sessionStorage['userInfo'];
        };
        WebStorageService.prototype.remove = function () {
            delete (this.$window.sessionStorage['userInfo']);
        };
        WebStorageService.$inject = ['$window'];
        return WebStorageService;
    })();
    exports.WebStorageService = WebStorageService;
});
//# sourceMappingURL=WebStorageService.js.map