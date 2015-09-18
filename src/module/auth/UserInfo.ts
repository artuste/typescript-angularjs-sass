export class UserInfo{
    //static $inject = [];

    public model:JSON;

    constructor() {}

    set = (userInfo) => {
        this.model = userInfo;
    };

    get = () => {
        return this.model;
    };
}
