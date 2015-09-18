import {directive} from '../../../decorators/directive';

@directive('$rootScope')
export class StyleSwitcherComponent implements ng.IDirective {
    public restrict:string = 'EA';
    public templateUrl:string = 'src/module/components/StyleSwitcher/StyleSwitcher.html';
    public scope:any;

    constructor(private $rootScope:any) {}

    public link = (scope:any, element:ng.IAugmentedJQuery, attrs:ng.IAttributes):void => {
        scope.styleConfig = {
            labels: [
                'BUTTONS.SWITCH_STYLES_CLIENT',
                'BUTTONS.SWITCH_STYLES_DEFAULT'
            ]
        };

        var rootScope = this.$rootScope;

        scope.stylesSwitcher = function () {
            if (scope.switchBtnLabel === scope.styleConfig.labels[0]) {
                scope.switchBtnLabel = scope.styleConfig.labels[1];
                rootScope.clientStyleEnable = true;
            } else {
                scope.switchBtnLabel = scope.styleConfig.labels[0];
                rootScope.clientStyleEnable = false;
            }
        };

        scope.switchBtnLabel = scope.styleConfig.labels[0];
    };
}