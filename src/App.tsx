import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import Login from './routes/Login';
import PrivateRoute from './auth/PrivateRoute';
import Home from './routes/Home';
import ProductPage from './routes/ProductPage';
import { AppProvider } from './store/AppProvider';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate replace to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<PrivateRoute component={Home} />} />
                <Route path="/product" element={<PrivateRoute component={ProductPage} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
