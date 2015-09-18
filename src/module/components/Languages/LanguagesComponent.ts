import {directive} from '../../../decorators/directive';

@directive()
export class LanguagesComponent implements ng.IDirective {
    public restrict:string = 'EA';
    public templateUrl:string = 'src/module/components/Languages/Languages.html';

    public scope:any;

    constructor() {
        this.scope = {
            config: '=',
            lang: '='
        };
    }

    public controller = ($rootScope, $scope, $translate):void => {
        $rootScope.language = $translate.use();

        $scope.changeLanguage = function (langKey) {
            $translate.use(langKey);
            $rootScope.language = langKey;
        };
    };
}
