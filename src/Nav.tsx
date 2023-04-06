import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <ul>
        <li>
	  <Link to="/login">Login</Link>
	</li>
	<li>
	  <Link to="/admin">Admin</Link>
	</li>
      </ul>
    </nav>
  )
}

export default Nav