export function ContextMenuComponent():ng.IDirective {
    return {
        restrict: 'EA',
        scope: {},
        controller: Controller,
        controllerAs: 'vm',
        templateUrl: 'src/module/components/ContextMenu/ContextMenu.html'
    };

    Controller.$inject = ['ContextMenuService'];

    function Controller(ContextMenuService) {
        var vm = this;

        vm.config = {};
        var jsonUrl = '/src/module/components/ContextMenu/Config.json';

        ContextMenuService.getConfig(jsonUrl)
            .then(function (response) {
                vm.config.list = response.data;
            });
    }
}