define(["require", "exports", '../../App', './HomeCtrl'], function (require, exports, App_1, HomeCtrl_1) {
    var module = App_1.App.module('app.home', []);
    module
        .controller('HomeCtrl', HomeCtrl_1.HomeCtrl)
        .config(function ($stateProvider) {
        $stateProvider.state('main.home', {
            url: '/home',
            views: {
                application: {
                    templateUrl: 'src/module/home/Home.html',
                    controller: HomeCtrl_1.HomeCtrl,
                    controllerAs: 'vm'
                }
            }
        });
    });
});
//# sourceMappingURL=Home.js.map