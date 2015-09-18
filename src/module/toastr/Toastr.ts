import {App} from '../../App';
import 'angular-toastr';
import 'angular-toastr/angular-toastr.css!';

const module:angular.IModule = App.module('app.toastr', ['toastr']);

module.config((toastrConfig:any) => {
    App.extend(toastrConfig, {
        allowHtml: true,
        closeButton: false,
        closeHtml: '<button>&times;</button>',
        containerId: 'toast-container',
        extendedTimeOut: 1000,
        iconClasses: {
            error: 'toast-error',
            info: 'toast-info',
            success: 'toast-success',
            warning: 'toast-warning'
        },
        maxOpened: 0,
        messageClass: 'toast-message',
        newestOnTop: true,
        onHidden: null,
        onShown: null,
        positionClass: 'toast-bottom-right',
        preventDuplicates: false,
        tapToDismiss: true,
        target: 'body',
        timeOut: 5000,
        titleClass: 'toast-title',
        toastClass: 'toast',
        templates: {
            toast: 'src/module/toastr/view/toastr.html',
            progressbar: 'src/module/toastr/view/progressbar.html'
        }
    });
});
