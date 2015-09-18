var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
define(["require", "exports", '../../../decorators/directive'], function (require, exports, directive_1) {
    var StyleSwitcherComponent = (function () {
        function StyleSwitcherComponent($rootScope) {
            var _this = this;
            this.$rootScope = $rootScope;
            this.restrict = 'EA';
            this.templateUrl = 'src/module/components/StyleSwitcher/StyleSwitcher.html';
            this.link = function (scope, element, attrs) {
                scope.styleConfig = {
                    labels: [
                        'BUTTONS.SWITCH_STYLES_CLIENT',
                        'BUTTONS.SWITCH_STYLES_DEFAULT'
                    ]
                };
                var rootScope = _this.$rootScope;
                scope.stylesSwitcher = function () {
                    if (scope.switchBtnLabel === scope.styleConfig.labels[0]) {
                        scope.switchBtnLabel = scope.styleConfig.labels[1];
                        rootScope.clientStyleEnable = true;
                    }
                    else {
                        scope.switchBtnLabel = scope.styleConfig.labels[0];
                        rootScope.clientStyleEnable = false;
                    }
                };
                scope.switchBtnLabel = scope.styleConfig.labels[0];
            };
        }
        StyleSwitcherComponent = __decorate([
            directive_1.directive('$rootScope')
        ], StyleSwitcherComponent);
        return StyleSwitcherComponent;
    })();
    exports.StyleSwitcherComponent = StyleSwitcherComponent;
});
//# sourceMappingURL=StyleSwitcherComponent.js.map