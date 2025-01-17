import './App.css';
import Auth from './components/Auth';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Users from './components/Users';
import Navbar from './components/Navbar';

const PrivateRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem('profile');
  return isAuthenticated ? element : <Navigate to="/auth" replace />;
};

const PublicRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem('profile');
  return !isAuthenticated ? element : <Navigate to="/" replace />;
};

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<PrivateRoute element={<Users />} />} />
          <Route path='/auth' element={<PublicRoute element={<Auth />} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
