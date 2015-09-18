define(["require", "exports", './App', './module/core/Config', './module/core/Constants', './module/core/Mappers', './module/core/interceptors/ErrorInterceptor', './module/toastr/Toastr', './module/auth/Authentication', './module/auth/UserInfo', './module/home/Home', './module/components/Main/Main', './module/components/TopBar/TopBar', './module/components/Menu/Menu', './module/components/Languages/Languages', './module/components/StyleSwitcher/StyleSwitcher', './module/components/ContextMenu/ContextMenu', './module/components/UserBar/UserBar'], function (require, exports, App_1) {
    App_1.App.element(document).ready(function () {
        App_1.App.bootstrap(document, [
            'app',
            'app.home',
            'app.auth',
            'app.toastr',
            'com.main',
            'com.menu',
            'com.topbar',
            'com.languages',
            'com.styleSwitcher',
            'com.contextmenu',
            'com.userBar'
        ]);
    });
});
//# sourceMappingURL=index.js.map