import {App} from '../../../App';
import {ContextMenuComponent} from './ContextMenuComponent';
import {ContextMenuService} from './ContextMenuService';

const module:angular.IModule = App.module('com.contextmenu', []);

module
    .directive('comContextMenu', <any>ContextMenuComponent)
    .service('ContextMenuService', ContextMenuService);