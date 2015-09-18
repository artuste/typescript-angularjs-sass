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

    login = (form) => {
        var mockResponse = {
            user: form.username,
            token: 'Token-' + Math.floor(Math.random()*1000000)
        };
        var deferred = this.$q.defer();

        deferred.resolve(mockResponse);

        return deferred.promise;
    };

    logout = () => {
        var action = this.WebStorageService.remove();
        var deferred = this.$q.defer();

        deferred.resolve(action);

        return deferred.promise;
    };
}
