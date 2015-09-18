define(["require", "exports", '../../../App', './ContextMenuComponent', './ContextMenuService'], function (require, exports, App_1, ContextMenuComponent_1, ContextMenuService_1) {
    var module = App_1.App.module('com.contextmenu', []);
    module
        .directive('comContextMenu', ContextMenuComponent_1.ContextMenuComponent)
        .service('ContextMenuService', ContextMenuService_1.ContextMenuService);
});
//# sourceMappingURL=ContextMenu.js.map