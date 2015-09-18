import {App} from '../../App';
import {ServerErrorMapper} from './mappers/ServerErrorMapper';

const module:angular.IModule = App.module('app');

module
    .service('ServerErrorMapper', ServerErrorMapper);