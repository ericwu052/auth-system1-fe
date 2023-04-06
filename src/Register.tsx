import { useState } from 'react'
import { tryRegister } from './helpers/register'

function Register() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  async function handleRegister(e) {
    e.preventDefault()
    const response = await tryRegister(username, password)
    console.log(response)
  }
  
  return (
    <div className="Register">
      <div>
        <label>Username: <input name="username" onChange={e => setUsername(e.target.value)} /></label>
      </div>
      <div>
        <label>Password: <input name="password" onChange={e => setPassword(e.target.value)} /></label>
      </div>
      <button onClick={ handleRegister }>Register</button>
    </div>
  )
}

export default Register
