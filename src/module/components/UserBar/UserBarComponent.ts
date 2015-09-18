import {directive} from '../../../decorators/directive';

@directive('$rootScope')
export class UserBarComponent implements ng.IDirective {
    public restrict:string = 'EA';
    public templateUrl:string = 'src/module/components/UserBar/UserBar.html';
    public scope:any;

    constructor(public $rootScope:any) {
        this.scope = {
            data: '='
        };
    }

    public link = (scope:ng.IScope, element:ng.IAugmentedJQuery, attrs:ng.IAttributes):void => {

    };
}