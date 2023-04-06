import { useState } from 'react'
import { tryRegister } from './helpers/register'

function Register() {
  const [email, setEmail] = useState('')
  const [fullname, setFullname] = useState('')
  const [mobileNo, setMobileNo] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  
  async function handleRegister(e) {
    e.preventDefault()
    const response = await tryRegister({
      email, fullname, mobileNo,
      password, password2
    })
    console.log(response)
  }
  
  return (
    <div className="Register">
      <div>
        <label>Email address: <input name="email" onChange={e => setEmail(e.target.value)} /></label>
      </div>
      <div>
        <label>Full Name: <input name="fullname" onChange={e => setFullname(e.target.value)} /></label>
      </div>
      <div>
        <label>Mobile Number: <input name="mobileNo" onChange={e => setMobileNo(e.target.value)} /></label>
      </div>
      <div>
        <label>Set Password: <input name="password" type="password" onChange={e => setPassword(e.target.value)} /></label>
      </div>
      <div>
        <label>ReType Password: <input type="password" onChange={e => setPassword2(e.target.value)} /></label>
      </div>
      <button onClick={ handleRegister }>Register</button>
    </div>
  )
}

export default Register
