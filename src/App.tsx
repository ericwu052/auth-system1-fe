import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Demo from './Demo'
import Login from './Login'
import LoginPhone from './LoginPhone'
import Register from './Register'
import Counter from './Counter'
import Nav from './Nav'
import Dashboard from './Dashboard'
import ForgotPassword from './ForgotPassword'

function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route exact path="/" element={<Demo/>}></Route>
	<Route exact path="/demo" element={<Demo/>}></Route>
	<Route exact path="/login" element={<Login/>}></Route>
	<Route exact path="/login-phone" element={<LoginPhone/>}></Route>
	<Route exact path="/register" element={<Register/>}></Route>
	<Route exact path="/redux-demo" element={<Counter/>}></Route>
	<Route exact path="/dashboard" element={<Dashboard/>}></Route>
	<Route exact path="/forgot-password" element={<ForgotPassword/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
