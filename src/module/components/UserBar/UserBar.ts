import {App} from '../../../App';
import {UserBarComponent} from './UserBarComponent';

const module:ng.IModule = App.module('com.userBar', []);

module.directive('comUserBar', <any>UserBarComponent);