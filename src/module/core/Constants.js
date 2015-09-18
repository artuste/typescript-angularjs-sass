define(["require", "exports", '../../App', './constants/URLS', './constants/ERROR_EVENTS'], function (require, exports, App_1, URLS_1, ERROR_EVENTS_1) {
    var module = App_1.App.module('app');
    module
        .constant('URLS', URLS_1.urls)
        .constant('ERROR_EVENTS', ERROR_EVENTS_1.errorEvents);
});
//# sourceMappingURL=Constants.js.map