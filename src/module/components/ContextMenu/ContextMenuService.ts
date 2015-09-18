export class ContextMenuService {
    static $inject = ['$http', 'URLS', '$q'];

    constructor(public $http:ng.IHttpService,
                public URLS:any,
                public $q:any) {
    }

    getConfig(context) {
        return this.$http.get(this.URLS.base + context);


        //TODO: Temporary
        //var deferred = this.$q.defer();
        //
        //deferred.resolve({
        //    data: true
        //});
        //
        //return deferred.promise;
    }
}


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