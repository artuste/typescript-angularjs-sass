define(["require", "exports", '../../../App', './MenuComponent', './MenuService'], function (require, exports, App_1, MenuComponent_1, MenuService_1) {
    var module = App_1.App.module('com.menu', []);
    module
        .directive('comMenu', MenuComponent_1.MenuComponent)
        .service('MenuService', MenuService_1.MenuService);
});
//# sourceMappingURL=Menu.js.map