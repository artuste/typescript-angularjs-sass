import {directive} from '../../../decorators/directive';

@directive('AuthenticationService')
export class UserBarComponent implements ng.IDirective {
    public restrict:string = 'EA';
    public templateUrl:string = 'src/module/components/UserBar/UserBar.html';
    public scope:any;
    //public aaa:any;

    constructor(private AuthenticationService:any) {
        //this.scope = {
        //    data: '='
        //};
    }

    public link = (scope:any, element:ng.IAugmentedJQuery, attrs:ng.IAttributes):void => {
        //scope.userInfo = scope.data;
        this.userInfo(scope);
    };

    userInfo(scope):void {
        this.AuthenticationService.getInfo()
        .then(function (response) {
            scope.userInfo = JSON.parse(response);
        });
    };
}