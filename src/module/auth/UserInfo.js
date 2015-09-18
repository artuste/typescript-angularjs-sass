define(["require", "exports"], function (require, exports) {
    var UserInfo = (function () {
        function UserInfo() {
            var _this = this;
            this.set = function (userInfo) {
                _this.model = userInfo;
            };
            this.get = function () {
                return _this.model;
            };
        }
        return UserInfo;
    })();
    exports.UserInfo = UserInfo;
});
//# sourceMappingURL=UserInfo.js.map