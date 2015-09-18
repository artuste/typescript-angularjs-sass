export class LogoutCtrl {
    constructor(private $filter:angular.IFilterService,
                private $state:angular.ui.IStateService,
                private toastr:any,
                private Authentication:any) {
        Authentication.logout()
            .then(function () {
                var message = $filter('translate')('MESSAGES.LOGGEDOUT');

                $state.go('loginTemplate.login');
                toastr.success(message);
            });
    }
}