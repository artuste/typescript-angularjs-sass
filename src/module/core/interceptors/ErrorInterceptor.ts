export function ErrorInterceptor($rootScope, $q, ERROR_EVENTS) {
    return {
        responseError: function (response) {
            $rootScope.$broadcast({
                0: ERROR_EVENTS.timeout,
                400: ERROR_EVENTS.badRequest,
                401: ERROR_EVENTS.notAuthenticated,
                403: ERROR_EVENTS.forbidden,
                404: ERROR_EVENTS.notFound,
                405: ERROR_EVENTS.notAllowed,
                500: ERROR_EVENTS.internal
            }[response.status], response);
            
            return $q.reject(response);
        }
    }
}