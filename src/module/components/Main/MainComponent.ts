import {directive} from '../../../decorators/directive';

@directive('$filter', 'MainService', 'UserInfo')
export class MainComponent implements ng.IDirective {
    public restrict:string = 'EA';
    public config:JSON;

    constructor(private $filter:any, private MainService:any, private UserInfo:any) {}

    public link = (scope:any, element:ng.IAugmentedJQuery, attrs:ng.IAttributes):void => {
        this.getConfiguration(scope);
        this.getUserInfo(scope);
    };

    getConfiguration(scope):void {
        this.MainService.getConfig()
            .then(function (response) {
            scope.config = response.data;
        });
    };

    getUserInfo(scope):void {
        scope.userinfo = this.UserInfo.get();
    };
}