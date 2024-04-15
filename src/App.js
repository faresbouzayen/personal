import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import logo from './assets/logo.svg';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/faresbouzayen');
        if (!response.ok) {
          throw new Error('Cannot get user data');
        }
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header logo={logo} />
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <Routes>
            <Route path="/" element={<Profile userName="faresbouzayen" />} />
            <Route path="/projects" element={<Projects userName="faresbouzayen" />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
