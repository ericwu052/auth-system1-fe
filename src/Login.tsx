import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch } from './hooks'
import { setAccessToken } from './reduxslice/authsystemSlice'
import { tryLoginEmail, resetPasswordByEmail } from './helpers/login'

function Login() {

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin(e) {
    e.preventDefault()
    const response = await tryLoginEmail(email, password)
    if (response.isSuccessful) {
      dispatch(setAccessToken(response.token))
      navigate('/dashboard')
    } else {
      dispatch(setAccessToken(''))
    }
    console.log(response)
  }

  async function handleResetPassword(e) {
    e.preventDefault()
    resetPasswordByEmail(email)
    navigate('/forgot-password')
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
      <p>Forget Password? <a onClick={ handleResetPassword }>click here to reset password</a></p>
    </div>
  )
}

export default Login
