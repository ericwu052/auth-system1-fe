import { loginUrl } from '../constants'

interface LoginSuccess {
    isSuccessful: boolean,
    token: string
}

interface LoginFail {
    isSuccessful: boolean,
    err: Error
}

async function tryLoginEmail(email: string, password: string): LoginSuccess | LoginFail {
    try {
	const response = await fetch(loginUrl, {
	    method: 'POST',
	    mode: 'cors',
	    headers: {
		'Content-Type': 'application.json'
	    },
	    body: JSON.stringify({email, password})
	})
	const responseJson = await response.json()
	console.log(responseJson)
	if (responseJson.token) {
	    return { isSuccessful: true, token: responseJson.token } as LoginSuccess
	} else {
	    const response: LoginFailed = { isSuccessful: false, err: Error('wrong password') }
	    return response
	}
    } catch (e) {
	const response: LoginFailed = { isSuccessful: false, err: e }
	return response
    }
}

export type LoginSuccess = LoginSucces
export type LoginFail = LoginFail
export {
    tryLoginEmail
}
