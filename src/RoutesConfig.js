import React from 'react';
import LoginPage from './pages/components/LoginPage';
import Dashboard from './pages/components/Dashboard';
import ForgotPassword from './pages/components/ForgotPassword';
import SignUp from './pages/components/SignUp';

// Define route configuration (no <Routes> here)
export const routeConfig = [
  {
    path: "/",
    element: <LoginPage />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  // Other routes
];

