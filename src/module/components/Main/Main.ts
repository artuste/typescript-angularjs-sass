import {App} from '../../../App';
import {MainComponent} from './MainComponent';
import {MainService} from './MainService';
import {UserInfo} from '../../auth/UserInfo';

const module:angular.IModule = App.module('com.main', []);

module
    .directive('comMain', <any>MainComponent)
    .service('MainService', MainService)
    .service('UserInfo', UserInfo);