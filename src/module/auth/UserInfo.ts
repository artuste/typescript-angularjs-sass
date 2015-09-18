export class UserInfo{
    //static $inject = [];

    public model:JSON;

    constructor() {}

    set = (userInfo) => {
        this.model = userInfo.data;
    };

    get = () => {
        return this.model;
    };
}
