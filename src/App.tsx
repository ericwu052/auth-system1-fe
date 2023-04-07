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
        <Route path="/" element={<Demo/>}></Route>
	<Route path="/demo" element={<Demo/>}></Route>
	<Route path="/login" element={<Login/>}></Route>
	<Route path="/login-phone" element={<LoginPhone/>}></Route>
	<Route path="/register" element={<Register/>}></Route>
	<Route path="/redux-demo" element={<Counter/>}></Route>
	<Route path="/dashboard" element={<Dashboard/>}></Route>
	<Route path="/forgot-password" element={<ForgotPassword/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
