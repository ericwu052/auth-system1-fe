import { Link, useNavigate } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from './hooks'

function Dashboard() {
  const token = useAppSelector((state) => state.authSystem.accessToken)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  async function handleLogout() {
    dispatch(setAccessToken(''))
    navigate('/login')
  }
  
  return (
    <div>
      <p>You're Logged in.</p>
      <p>Token: {token}</p>
      <Link to="/login">Log out</Link>
    </div>
  )
}

export default Dashboard
