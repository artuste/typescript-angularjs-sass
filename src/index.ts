import {App} from './App';
import './module/core/Config';
import './module/core/Constants';
import './module/core/Mappers';
import './module/core/interceptors/ErrorInterceptor';
import './module/toastr/Toastr';

// features
import './module/auth/Authentication';
import './module/auth/UserInfo';
import './module/home/Home';

// components
import './module/components/Main/Main';
import './module/components/TopBar/TopBar';
import './module/components/Menu/Menu';
import './module/components/Languages/Languages';
import './module/components/StyleSwitcher/StyleSwitcher';
import './module/components/ContextMenu/ContextMenu';
import './module/components/UserBar/UserBar';

App.element(document).ready(() => {
    App.bootstrap(document, [
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
