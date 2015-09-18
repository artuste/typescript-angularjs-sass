/// <reference path="../vendor/typings/angularjs/angular.d.ts" />
/// <reference path="../vendor/typings/angularjs/angular-animate.d.ts" />
/// <reference path="../vendor/typings/angularjs/angular-cookies.d.ts" />
/// <reference path="../vendor/typings/angularjs/angular-sanitize.d.ts" />
/// <reference path="../vendor/typings/angular-translate/angular-translate.d.ts" />
/// <reference path="../vendor/typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../vendor/typings/toastr/toastr.d.ts" />

/* tslint:disable:variable-name */

import * as angular from 'angular';
import 'angular-ui-router';
import 'angular-animate';
import 'angular-cookies';
import 'angular-sanitize';
import 'angular-translate';
import 'angular-translate-loader-static-files';
import 'angular-translate-loader-url';
import 'angular-toastr';
import 'bootstrap';
import 'angular-ui-bootstrap';

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

const App:angular.IAngularStatic = angular;

export {App};
