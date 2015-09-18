define(["require", "exports", '../../../App', './MainComponent', './MainService', '../../auth/UserInfo'], function (require, exports, App_1, MainComponent_1, MainService_1, UserInfo_1) {
    var module = App_1.App.module('com.main', []);
    module
        .directive('comMain', MainComponent_1.MainComponent)
        .service('MainService', MainService_1.MainService)
        .service('UserInfo', UserInfo_1.UserInfo);
});
//# sourceMappingURL=Main.js.map