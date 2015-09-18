import {App} from '../../../App';
import {TopBarComponent} from './TopBarComponent';

const module:ng.IModule = App.module('com.topbar', []);

module.directive('comTopbar', <any>TopBarComponent);