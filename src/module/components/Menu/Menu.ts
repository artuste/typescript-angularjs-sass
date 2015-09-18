import {App} from '../../../App';
import {MenuComponent} from './MenuComponent';
import {MenuService} from './MenuService';

const module:angular.IModule = App.module('com.menu', []);

module
    .directive('comMenu', MenuComponent)
    .service('MenuService', MenuService);