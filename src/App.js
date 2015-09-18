/// <reference path="../vendor/typings/angularjs/angular.d.ts" />
/// <reference path="../vendor/typings/angularjs/angular-animate.d.ts" />
/// <reference path="../vendor/typings/angularjs/angular-cookies.d.ts" />
/// <reference path="../vendor/typings/angularjs/angular-sanitize.d.ts" />
/// <reference path="../vendor/typings/angular-translate/angular-translate.d.ts" />
/// <reference path="../vendor/typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../vendor/typings/toastr/toastr.d.ts" />
define(["require", "exports", 'angular', 'angular-ui-router', 'angular-animate', 'angular-cookies', 'angular-sanitize', 'angular-translate', 'angular-translate-loader-static-files', 'angular-translate-loader-url', 'angular-toastr', 'bootstrap', 'angular-ui-bootstrap'], function (require, exports, angular) {
    angular.module('app', [
        /*
         * Angular modules
         */
        'ngAnimate',
        'ngCookies',
        'ngSanitize',
        /*
         * 3rd Party modules
         */
        'ui.router',
        'pascalprecht.translate',
        'ui.bootstrap'
    ]);
    var App = angular;
    exports.App = App;
});
//# sourceMappingURL=App.js.map