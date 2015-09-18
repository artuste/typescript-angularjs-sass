define(["require", "exports"], function (require, exports) {
    function MenuComponent() {
        return {
            restrict: 'EA',
            scope: {},
            controller: Controller,
            controllerAs: 'vm',
            templateUrl: 'src/module/components/Menu/Menu.html'
        };
        Controller.$inject = ['MenuService'];
        function Controller(MenuService) {
            var vm = this;
            vm.config = {};
            var jsonUrl = '/src/config/modulesList.json';
            MenuService.getConfig(jsonUrl)
                .then(function (response) {
                vm.config.modulesList = response.data;
            });
        }
    }
    exports.MenuComponent = MenuComponent;
});
//# sourceMappingURL=MenuComponent.js.map