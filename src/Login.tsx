import { useState } from 'react'

function Login() {
  return (
    <div className="Login">
      <div>
        <label>Username: <input name="username" /></label>
      </div>
      <div>
        <label>Password: <input name="password" /></label>
      </div>
      <button>Login</button>
    </div>
  )
}

export default Login
