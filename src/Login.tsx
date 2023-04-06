import { useState } from 'react'
import { useAppDispatch } from './hooks'
import { setAccessToken } from './reduxslice/authsystemSlice'
import { tryLogin } from './helpers/login'

function Login() {

  const dispatch = useAppDispatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin(e) {
    e.preventDefault()
    const response = await tryLogin(username, password)
    if (response.token) {
      dispatch(setAccessToken(response.token))
    } else {
      dispatch(setAccessToken(''))
    }
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
