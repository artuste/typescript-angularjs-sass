export interface IERROR_EVENTS {
    loginSuccess: string,
    loginFailed: string,
    logoutSuccess: string,
    internal: string,
    notAuthenticated: string,
    notAuthorized: string,
    notAllowed: string,
    notFound: string,
    forbidden: string,
    timeout: string,
    badRequest: string
}

export var errorEvents:IERROR_EVENTS = {
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