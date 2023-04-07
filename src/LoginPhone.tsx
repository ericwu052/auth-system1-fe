import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch } from './hooks'
import { setAccessToken } from './reduxslice/authsystemSlice'
import { tryLoginPHone } from './helpers/login'

function LoginPhone() {

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin(e) {
    e.preventDefault()
    const response = await tryLoginPhone(phone, password)
    if (response.isSuccessful) {
      dispatch(setAccessToken(response.token))
      navigate('/dashboard')
    } else {
      dispatch(setAccessToken(''))
    }
    console.log(response)
  }
  
  return (
    <div className="Login">
      <div>
        <label>Mobile Phone: <input name="mobileNo" onChange={e => setPhone(e.target.value)}/></label>
      </div>
      <div>
        <label>Password: <input name="password" onChange={e => setPassword(e.target.value)} /></label>
      </div>
      <button onClick={ handleLogin }>Login</button>
      <p>Want to login by email? <Link to="/login">Click here to login by email</Link></p>
      <p>Don't have an account? <Link to="/register">click here to register</Link></p>
    </div>
  )
}

export default LoginPhone
