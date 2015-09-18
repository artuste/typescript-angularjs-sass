import {App} from '../../App';
import {urls} from './constants/URLS';
import {errorEvents} from './constants/ERROR_EVENTS';

const module:angular.IModule = App.module('app');

module
    .constant('URLS', urls)
    .constant('ERROR_EVENTS', errorEvents);
