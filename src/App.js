import './App.css';
import Navigation from './components/Navigation';
import Login from './components/Auth/Login';
import Todos from './components/Todos/Todos';
import Categories from './components/Categories/Categories';
import Bootstrap from './components/Bootstrap/Bootstrap'
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {AuthProvider} from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="todos" element={<ProtectedRoute><Todos /></ProtectedRoute>} />
            <Route path="categories" element={<ProtectedRoute><Categories /></ProtectedRoute>} />
            <Route path="bootstrap" element={<Bootstrap />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  ); 
  
}

export default App;
