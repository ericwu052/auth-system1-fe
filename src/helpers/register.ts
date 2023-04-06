import { registerUrl } from '../constants'

async function tryRegister(origObj = {
    email: string,
    fullname: string,
    mobileNo: string,
    password: string,
    password2: string
}) {
    const response = await fetch(registerUrl, {
	method: 'POST',
	mode: 'cors',
	headers: {
	    'Content-Type': 'application/json'
	},
	body: JSON.stringify(origObj)
    })
    return response.json()
}

export {
    tryRegister
}
