async function tryLogin(username: string, password: string) {
    const loginUrl = 'http://172.17.0.1:8080/api/login'
    const response = await fetch(loginUrl, {
	method: 'POST',
	mode: 'cors',
	headers: {
	    'Content-Type': 'application.json'
	},
	body: JSON.stringify({username, password})
    })
    return response.json()
}

export {
    tryLogin
}
