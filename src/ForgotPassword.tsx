import { Link } from 'react-router-dom'
import { tryUnlockByEmail, requestForgotPasswordRequestByEmail } from './helpers/forgotPassword'
import { useAppSelector, useAppDispatch } from './hooks'
import { setEmailAction } from './reduxslice/authsystemSlice'

function ForgotPassword() {

  const dispatch = useAppDispatch()
  /* we use redux for email because it'll be used on next page */
  const email = useAppSelector(state => state.authSystem.email)
  function setEmail(newEmail: string) {
    dispatch(setEmailAction(newEmail))
  }

  async function handleForgotPasswordRequestByEmail(e) {
    const response = await requestForgotPasswordRequestByEmail({ email })
    console.log(response)
  }
  
  return (
    <div>
      <h1>Forgot Password</h1>
      <p>Enter your email or phone number to reset passwor</p>
      <div><label>Email: <input name="email" onChange={e => setEmail(e.target.value) }/></label></div>
      <button onClick={handleForgotPasswordRequestByEmail}>Reset</button>
      
      <p>Want to use phone number? <Link href="/forgot-password">Click here to request reset password by phone number</Link></p>
    </div>
  )
}

export default ForgotPassword
