import { useState } from 'react'
import { tryLogin } from './helpers/login.ts'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin(e) {
    e.preventDefault()
    const response = await tryLogin(username, password)
    console.log(response)
  }
  
  return (
    <div className="Login">
      <div>
        <label>Username: <input name="username" onChange={e => setUsername(e.target.value)}/></label>
      </div>
      <div>
        <label>Password: <input name="password" onChange={e => setPassword(e.target.value)} /></label>
      </div>
      <button onClick={ handleLogin }>Login</button>
    </div>
  )
}

export default Login
