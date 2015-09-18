export class WebStorageService {
    static $inject = ['$window'];

    constructor(private $window:any) {
    }

    set(data) {
        this.$window.sessionStorage['userInfo'] = data;
    }

    get() {
        return this.$window.sessionStorage['userInfo'];
    }

    remove() {
        delete(this.$window.sessionStorage['userInfo']);
    }
}
