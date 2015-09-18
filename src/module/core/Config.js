define(["require", "exports", '../../App', '../auth/UserInfo', './interceptors/ErrorInterceptor'], function (require, exports, App_1, UserInfo_1, ErrorInterceptor_1) {
    var module = App_1.App.module('app');
    module.service('ErrorInterceptor', ErrorInterceptor_1.ErrorInterceptor);
    module.service('UserInfo', UserInfo_1.UserInfo);
    module
        .run(run)
        .config(config);
    function run($rootScope, $filter, toastr, ERROR_EVENTS) {
        stateChangeSuccess();
        stateChangeError();
        errorHandling();
        function stateChangeSuccess() {
            $rootScope.$on("$stateChangeSuccess", function (response) {
                console.log('run success', response);
            });
        }
        function stateChangeError() {
            $rootScope.$on("$stateChangeError", function (event, current, previous, eventObj) {
                console.log('run error', event);
            });
        }
        function errorHandling() {
            for (var errorEvent in ERROR_EVENTS) {
                if (errorEvent) {
                    _eventListener(errorEvent);
                }
            }
        }
        function _eventListener(errorEvent) {
            $rootScope.$on(errorEvent, function (name, listener) {
                console.log('listener.status', listener.status);
                var errorTitle = $filter('translate')('ERRORS.' + listener.status), errorDesc = listener.data || '';
                toastr.success(errorDesc, errorTitle);
            });
        }
    }
    function config($httpProvider, $locationProvider, $stateProvider, $translateProvider, $urlRouterProvider) {
        $urlRouterProvider
            .otherwise('/login');
        $locationProvider.html5Mode(true);
        $translateProvider
            .useStaticFilesLoader({
            prefix: 'src/i18n/locale-',
            suffix: '.json'
        }).preferredLanguage('en');
        $stateProvider
            .state('main', {
            abstract: true,
            views: {
                application: {
                    templateUrl: 'src/views/main.html',
                    resolve: {
                        auth: ["$state", "$q", "toastr", "Authentication", "UserInfo",
                            function ($state, $q, toastr, Authentication, UserInfo) {
                                return Authentication.getInfo()
                                    .then(function (response) {
                                    console.log('Authentication Success', response);
                                    if (response) {
                                        UserInfo.set(response);
                                    }
                                    else {
                                        $state.go('loginTemplate.login');
                                    }
                                    return $q.when();
                                }, function (error) {
                                    console.log('Authentication Error', error);
                                    $state.go('loginTemplate.login');
                                    toastr.error("You're not logged in to OpenAM", 'Unauthorized (' + error.status + ')');
                                    return $q.reject();
                                });
                            }]
                    }
                }
            }
        })
            .state('loginTemplate', {
            abstract: true,
            views: {
                application: {
                    templateUrl: 'src/views/login.html'
                }
            }
        });
        $httpProvider.interceptors.push([
            '$injector',
            function ($injector) {
                return $injector.get('ErrorInterceptor');
            }
        ]);
    }
});
//# sourceMappingURL=Config.js.map