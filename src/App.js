import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, HashRouter } from 'react-router-dom';
import './App.css';
import Splash from './screens/splash';
import ChatPage from './screens/chatpage';
import HomePage from './screens/home';
import LoginPage from './screens/login';
import SearchPage from './screens/searchpage';
import SetMapPage from './screens/setlocation';
import VerifyPage from './screens/verify';
import CartPage from './screens/cart';
import StorePage from './screens/store';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <HashRouter>
      <div>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/home" element={<HomePage />} /> 
            <Route path="/search" element={<SearchPage />} />
            <Route path="/setlocation" element={<SetMapPage />} />
            <Route path="/verify" element={<VerifyPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/store" element={<StorePage />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
