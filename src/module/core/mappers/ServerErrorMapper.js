define(["require", "exports"], function (require, exports) {
    var ServerErrorMapper = (function () {
        function ServerErrorMapper() {
            this.map = function (formViewModel, formErrorsModel, serverErrors) {
                serverErrors.forEach(function (errorKey) {
                    var fieldName = (errorKey.source.pointer).substring(1);
                    formViewModel[fieldName].$error.serverError = true;
                    formErrorsModel[fieldName] = errorKey;
                });
            };
        }
        return ServerErrorMapper;
    })();
    exports.ServerErrorMapper = ServerErrorMapper;
});
//# sourceMappingURL=ServerErrorMapper.js.map