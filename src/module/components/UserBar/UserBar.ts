import {App} from '../../../App';
import {UserBarComponent} from './UserBarComponent';
import {AuthenticationService} from '../../auth/AuthenticationService';

const module:ng.IModule = App.module('com.userBar', []);

module
    .directive('comUserBar', <any>UserBarComponent)
    .service('AuthenticationService', AuthenticationService);