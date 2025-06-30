import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import AppRoutes from './routes/route';
import { LogIn } from './auth/LogIn';
import RegisterForm from './auth/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<RegisterForm/>}/>
        <Route path="/" element={<MainLayout />}>
          <Route path="*" element={<AppRoutes />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App; 
