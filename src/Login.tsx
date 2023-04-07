import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch } from './hooks'
import { setAccessToken } from './reduxslice/authsystemSlice'
import { tryLoginEmail } from './helpers/login'

function Login() {

  const dispatch = useAppDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin(e) {
    e.preventDefault()
    const response = await tryLoginEmail(email, password)
    if (response.isSuccessful) {
      dispatch(setAccessToken(response.token))
    } else {
      dispatch(setAccessToken(''))
    }
    console.log(response)
  }
  
  return (
    <div className="Login">
      <div>
        <label>Email: <input name="email" onChange={e => setEmail(e.target.value)}/></label>
      </div>
      <div>
        <label>Password: <input name="password" onChange={e => setPassword(e.target.value)} /></label>
      </div>
      <button onClick={ handleLogin }>Login</button>
      <p>Want to login by phone? <Link to="/login-phone">Click here to login by phone</Link></p>
      <p>Don't have an account? <Link to="/register">click here to register</Link></p>
    </div>
  )
}

export default Login
