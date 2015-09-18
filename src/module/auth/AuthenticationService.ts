export class AuthenticationService {
    static $inject = ['$http', '$q', 'URLS', 'WebStorageService'];

    public model:JSON;

    constructor(private $http:ng.IHttpService,
                private $q:any,
                private URLS:any,
                private WebStorageService:any) {
    }

    getInfo = () => {
        var deferred = this.$q.defer();
        deferred.resolve(this.WebStorageService.get());
        return deferred.promise;
    };

    logout = () => {
        // This is only a promise :)
        var deferred = this.$q.defer();
        deferred.resolve(this.WebStorageService.remove());
        return deferred.promise;
    };
}
