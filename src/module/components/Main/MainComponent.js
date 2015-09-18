var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
define(["require", "exports", '../../../decorators/directive'], function (require, exports, directive_1) {
    var MainComponent = (function () {
        function MainComponent($filter, MainService, UserInfo) {
            var _this = this;
            this.$filter = $filter;
            this.MainService = MainService;
            this.UserInfo = UserInfo;
            this.restrict = 'EA';
            this.link = function (scope, element, attrs) {
                _this.getConfiguration(scope);
                _this.getUserInfo(scope);
            };
        }
        MainComponent.prototype.getConfiguration = function (scope) {
            this.MainService.getConfig()
                .then(function (response) {
                scope.config = response.data;
            });
        };
        ;
        MainComponent.prototype.getUserInfo = function (scope) {
            scope.userinfo = this.UserInfo.get();
        };
        ;
        MainComponent = __decorate([
            directive_1.directive('$filter', 'MainService', 'UserInfo')
        ], MainComponent);
        return MainComponent;
    })();
    exports.MainComponent = MainComponent;
});
//# sourceMappingURL=MainComponent.js.map