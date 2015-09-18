export class MenuService {
    public url:String;
    static $inject = ['$http', 'URLS'];

    constructor(public $http: ng.IHttpService,
                public URLS:any) {
    }

    getConfig(path) {
        this.url = this.URLS.base + path;
        return this.$http.get(this.URLS.base + path);
    }
}