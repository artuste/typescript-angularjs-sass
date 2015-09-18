define(["require", "exports"], function (require, exports) {
    var ContextMenuService = (function () {
        function ContextMenuService($http, URLS, $q) {
            this.$http = $http;
            this.URLS = URLS;
            this.$q = $q;
        }
        ContextMenuService.prototype.getConfig = function (context) {
            return this.$http.get(this.URLS.base + context);
            //TODO: Temporary
            //var deferred = this.$q.defer();
            //
            //deferred.resolve({
            //    data: true
            //});
            //
            //return deferred.promise;
        };
        ContextMenuService.$inject = ['$http', 'URLS', '$q'];
        return ContextMenuService;
    })();
    exports.ContextMenuService = ContextMenuService;
});
//import {App} from '../../../App';
//import {IURLS} from '../../core/URLS';
//
//export class ContextMenuService{
//    constructor(private $http:ng.IHttpService,
//                public URLS:IURLS,
//                public $q:any) {
//    }
//
//    getConfig() {
//        //TODO: Temporary
//        var deferred = this.$q.defer();
//
//        deferred.resolve({
//            data: true
//        });
//
//        return deferred.promise;
//    }
//} 
//# sourceMappingURL=ContextMenuService.js.map