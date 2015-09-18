var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
define(["require", "exports", '../../../decorators/directive'], function (require, exports, directive_1) {
    var TopBarComponent = (function () {
        function TopBarComponent($rootScope, URLS) {
            var _this = this;
            this.$rootScope = $rootScope;
            this.URLS = URLS;
            this.restrict = 'EA';
            this.templateUrl = 'src/module/components/TopBar/TopBar.html';
            this.link = function (scope, element, attrs, mainCtrl) {
                scope.$watch('config', _this.setConfig);
            };
            this.scope = {
                config: '=',
                lang: '='
            };
            this.initImageUrl();
        }
        TopBarComponent.prototype.setConfig = function (newValue, oldValue) {
            if (newValue !== oldValue) {
                this.config = newValue;
            }
        };
        TopBarComponent.prototype.initImageUrl = function () {
            this.imgUrl = this.URLS.personalization.imagesUrl;
        };
        TopBarComponent = __decorate([
            directive_1.directive('$rootScope', 'URLS')
        ], TopBarComponent);
        return TopBarComponent;
    })();
    exports.TopBarComponent = TopBarComponent;
});
//# sourceMappingURL=TopBarComponent.js.map