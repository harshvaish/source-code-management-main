import React from 'react';
import LoginPage from './pages/components/LoginPage';
import Dashboard from './pages/components/Dashboard';

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
  // Other routes
];

