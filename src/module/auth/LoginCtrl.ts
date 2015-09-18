export class LoginCtrl {
    static $inject = ['$filter', '$state', 'Authentication', 'WebStorageService'];

    public loginForm:any;

    constructor(private $filter:angular.IFilterService,
                private $state:angular.ui.IStateService,
                private Authentication:any,
                private WebStorageService:any) {
        var vm = this;

        //vm.loginForm = {};

        // Maybe move somewhere else ...
        this.Authentication.getInfo()
            .then(function (response) {
            if (response) {
                $state.go('main.home');
            }
        });
    }

    login() {
        this.WebStorageService.set(JSON.stringify({user: 'User1', token: 'token-1'}));
        this.$state.go('main.home');
    }
}