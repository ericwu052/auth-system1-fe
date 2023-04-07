import { unlockByEmailUrl, requestForgotPasswordEmailUrl } from '../constants'


interface EmailInput {
    email: string
}

async function requestForgotPasswordRequestByEmail(obj: EmailInput) {
    fetch(requestForgotPasswordEmailUrl, {
	method: 'POST',
	mode: 'cors',
	headers: {
	    'Content-Type': 'application/json'
	},
	body: JSON.stringify(obj)
    })
}

async function tryUnlockByEmail(allArg = {email: string, otp: string}): boolean {
    const response = await fetch(unlockByEmailUrl, {
	method: 'POST',
	mode: 'cors',
	headers: {
	    'Content-Type': "application/json"
	},
	body: JSON.stringify(allArg)
    })
    const responseJson = response.json()
    return responseJson.isOtpValid
}

export {
    tryUnlockByEmail,
    requestForgotPasswordRequestByEmail
}
