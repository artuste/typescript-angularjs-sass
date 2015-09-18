define(["require", "exports"], function (require, exports) {
    exports.errorEvents = {
        loginSuccess: 'auth-login-success',
        loginFailed: 'auth-login-failed',
        logoutSuccess: 'auth-logout-success',
        internal: 'internal-error',
        notAuthenticated: 'auth-not-authenticated',
        notAuthorized: 'auth-not-authorized',
        notAllowed: 'auth-not-allowed',
        notFound: 'not-found',
        forbidden: 'forbidden',
        timeout: 'request-timeout',
        badRequest: 'bad-request'
    };
});
//# sourceMappingURL=ERROR_EVENTS.js.map