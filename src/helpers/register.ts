async function tryRegister(username: string, password: string) {
    const registerUrl = 'http://172.17.0.1:8080/api/register'
    const response = await fetch(registerUrl, {
	method: 'POST',
	mode: 'cors',
	headers: {
	    'Content-Type': 'application/json'
	},
	body: JSON.stringify({username, password})
    })
    return response.json()
}

export {
    tryRegister
}
