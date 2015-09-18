import {App} from '../../App';
import {HomeCtrl} from './HomeCtrl';

const module:angular.IModule = App.module('app.home', []);

module
    .controller('HomeCtrl', HomeCtrl)
    .config(($stateProvider:angular.ui.IStateProvider) => {
        $stateProvider.state('main.home', {
            url: '/home',
            views: {
                application: {
                    templateUrl: 'src/module/home/view/home.html',
                    controller: HomeCtrl,
                    controllerAs: 'controller'
                }
            }
        });
    });
