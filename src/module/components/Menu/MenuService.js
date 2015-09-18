define(["require", "exports"], function (require, exports) {
    var MenuService = (function () {
        function MenuService($http, URLS) {
            this.$http = $http;
            this.URLS = URLS;
        }
        MenuService.prototype.getConfig = function (path) {
            this.url = this.URLS.base + path;
            return this.$http.get(this.URLS.base + path);
        };
        MenuService.$inject = ['$http', 'URLS'];
        return MenuService;
    })();
    exports.MenuService = MenuService;
});
//# sourceMappingURL=MenuService.js.map