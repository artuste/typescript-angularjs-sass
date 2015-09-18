import {App} from '../../../App';

export class ServerErrorMapper {
    constructor() {}

    map = (formViewModel, formErrorsModel, serverErrors) => {
        serverErrors.forEach(errorKey => {
            var fieldName = (errorKey.source.pointer).substring(1);

            formViewModel[fieldName].$error.serverError = true;
            formErrorsModel[fieldName] = errorKey;
        });
    };
}