export class LoginCtrl {
    static $inject = ['$filter', '$state', 'Authentication', 'WebStorageService'];

    public loginForm:any;

    constructor(private $filter:angular.IFilterService,
                private $state:angular.ui.IStateService,
                private Authentication:any,
                private WebStorageService:any) {
        var vm = this;

        vm.loginForm = {};

        this.Authentication.getInfo()
            .then(function (response) {
            if (response) {
                $state.go('main.home');
            }
        });
    }

    login(form) {
        var self = this;
        this.Authentication.login(form)
        .then(function (response) {
            var stringified = JSON.stringify(response);

            self.WebStorageService.set(stringified);
            self.$state.go('main.home');
        });
    }
}