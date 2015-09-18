var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
define(["require", "exports", '../../../decorators/directive'], function (require, exports, directive_1) {
    var UserBarComponent = (function () {
        //public aaa:any;
        function UserBarComponent(AuthenticationService) {
            var _this = this;
            this.AuthenticationService = AuthenticationService;
            this.restrict = 'EA';
            this.templateUrl = 'src/module/components/UserBar/UserBar.html';
            this.link = function (scope, element, attrs) {
                //scope.userInfo = scope.data;
                _this.userInfo(scope);
            };
            //this.scope = {
            //    data: '='
            //};
        }
        UserBarComponent.prototype.userInfo = function (scope) {
            this.AuthenticationService.getInfo()
                .then(function (response) {
                scope.userInfo = JSON.parse(response);
            });
        };
        ;
        UserBarComponent = __decorate([
            directive_1.directive('AuthenticationService')
        ], UserBarComponent);
        return UserBarComponent;
    })();
    exports.UserBarComponent = UserBarComponent;
});
//# sourceMappingURL=UserBarComponent.js.map