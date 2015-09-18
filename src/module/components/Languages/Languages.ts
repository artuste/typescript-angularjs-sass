import {App} from '../../../App';
import {LanguagesComponent} from './LanguagesComponent';

const module:angular.IModule = App.module('com.languages', []);

module.directive('comLanguages', <any>LanguagesComponent);