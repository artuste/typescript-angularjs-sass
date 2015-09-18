import {directive} from '../../../decorators/directive';
import {IURLS} from '../../core/constants/URLS';

@directive('$rootScope', 'URLS')
export class TopBarComponent implements ng.IDirective {
    public restrict:string = 'EA';
    public templateUrl:string = 'src/module/components/TopBar/TopBar.html';
    private imgUrl:string;
    private config:any;

    public scope:any;

    constructor(public $rootScope:any, public URLS:IURLS) {
        this.scope = {
            config: '=',
            lang: '='
        };

        this.initImageUrl();
    }

    public link = (scope:ng.IScope, element:ng.IAugmentedJQuery, attrs:ng.IAttributes, mainCtrl:any):void => {
        scope.$watch('config', this.setConfig);
    };

    private setConfig(newValue:string, oldValue:string):void {
        if (newValue !== oldValue) {
            this.config = newValue;
        }
    }

    private initImageUrl():void {
        this.imgUrl = this.URLS.personalization.imagesUrl;
    }
}