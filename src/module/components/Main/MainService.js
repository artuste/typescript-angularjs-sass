define(["require", "exports"], function (require, exports) {
    var MainService = (function () {
        function MainService($http, URLS, ERROR_EVENTS, toastr) {
            this.$http = $http;
            this.URLS = URLS;
            this.ERROR_EVENTS = ERROR_EVENTS;
            this.toastr = toastr;
        }
        MainService.prototype.getConfig = function () {
            return this.$http.get(this.URLS.config);
        };
        return MainService;
    })();
    exports.MainService = MainService;
});
//# sourceMappingURL=MainService.js.map