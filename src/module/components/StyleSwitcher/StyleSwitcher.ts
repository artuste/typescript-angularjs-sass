import {App} from '../../../App';
import {StyleSwitcherComponent} from './StyleSwitcherComponent';

const module:ng.IModule = App.module('com.styleSwitcher', []);

module.directive('comStyleSwitcher', <any>StyleSwitcherComponent);