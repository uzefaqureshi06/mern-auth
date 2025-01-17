import './App.css'
import Auth from './components/Auth'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Users from './components/Users'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Users />} />
          <Route path='/auth' element={<Auth />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
