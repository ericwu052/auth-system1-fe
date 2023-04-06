import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Demo from './Demo'
import Login from './Login'
import Register from './Register'
import Counter from './Counter'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Demo/>}></Route>
	<Route exact path="/demo" element={<Demo/>}></Route>
	<Route exact path="/login" element={<Login/>}></Route>
	<Route exact path="/register" element={<Register/>}></Route>
	<Route exact path="/redux-demo" element={<Counter/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
