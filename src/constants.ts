const host = 'http://172.17.0.1:8080/'
const registerUrl = host + 'api/register'
const loginUrl = host + 'api/login'
const loginPhoneUrl = host + 'api/login-phone'
const unlockByEmailUrl = host + 'api/request-otp-email'
const requestForgotPasswordEmailUrl = host + 'api/request-otp-email'

export {
    registerUrl,
    loginUrl,
    loginPhoneUrl,
    unlockByEmailUrl,
    requestForgotPasswordEmailUrl
}
