var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
define(["require", "exports", '../../../decorators/directive'], function (require, exports, directive_1) {
    var LanguagesComponent = (function () {
        function LanguagesComponent() {
            this.restrict = 'EA';
            this.templateUrl = 'src/module/components/Languages/Languages.html';
            this.controller = function ($rootScope, $scope, $translate) {
                $rootScope.language = $translate.use();
                $scope.changeLanguage = function (langKey) {
                    $translate.use(langKey);
                    $rootScope.language = langKey;
                };
            };
            this.scope = {
                config: '=',
                lang: '='
            };
        }
        LanguagesComponent = __decorate([
            directive_1.directive()
        ], LanguagesComponent);
        return LanguagesComponent;
    })();
    exports.LanguagesComponent = LanguagesComponent;
});
//# sourceMappingURL=LanguagesComponent.js.map