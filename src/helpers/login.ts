import { loginUrl, loginPhoneUrl } from '../constants'

interface LoginSuccess {
    isSuccessful: boolean,
    token: string
}

interface LoginFail {
    isSuccessful: boolean,
    err: Error
}

async function tryLoginEmail(email: string, password: string): Promise<LoginSuccess | LoginFail> {
    try {
	const response = await fetch(loginUrl, {
	    method: 'POST',
	    mode: 'cors',
	    headers: {
		'Content-Type': 'application/json'
	    },
	    body: JSON.stringify({email, password})
	})
	const responseJson = await response.json()
	if (responseJson.token) {
	    return { isSuccessful: true, token: responseJson.token } as LoginSuccess
	} else {
	    const response: LoginFail = { isSuccessful: false, err: Error('wrong password') }
	    return response
	}
    } catch (e) {
	const response: LoginFail = { isSuccessful: false, err: e }
	return response
    }
}

async function tryLoginPhone(phone: string, password: string): LoginSuccess | LoginFail {
    try {
	const response = await fetch(loginPhoneUrl, {
	    method: 'POST',
	    mode: 'cors',
	    headers: {
		'Content-Type': 'application/json'
	    },
	    body: JSON.stringify({phone, password})
	})
	const responseJson = await response.json()
	if (responseJson.token) {
	    return { isSuccessful: true, token: responseJson.token } as LoginSuccess
	} else {
	    return { isSuccessful: false, err: Error('wrong password') } as LoginFailed
	}
    } catch (e) {
	return { isSuccessful: false, err: e } as LoginFailed
    }
}

async function resetPasswordByEmail(email: string) {
    fetch(resetPasswordEmailUrl, {
	method: 'POST',
	mode: 'cors',
	headers: {
	    'Content-Type': 'application/json'
	},
	body: JSON.stringify({email})
    })
}

export {
    tryLoginEmail,
    tryLoginPhone,
    resetPasswordByEmail
}
