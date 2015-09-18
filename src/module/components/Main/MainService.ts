import {App} from '../../../App';
import {IURLS} from '../../core/constants/URLS';
import {IERROR_EVENTS} from '../../core/constants/ERROR_EVENTS';

export class MainService {
    constructor(private $http:ng.IHttpService,
                public URLS:IURLS,
                public ERROR_EVENTS:IERROR_EVENTS,
                public toastr:any) {
    }

    getConfig() {
        return this.$http.get(this.URLS.config);
    }
}