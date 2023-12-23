import React from 'react';
import { useNavigate } from 'react-router-dom';
import Dashboard from '../pages/dashboard';

export function AuthenticatedRedirects({ children, route }) {
  const navigate = useNavigate();

  const isAuthenticated = localStorage.getItem('token') !== null;
  React.useEffect(() => {

    if (!isAuthenticated) {
      console.log('Redirecting to:', route);
      navigate(route);
    }
    else {
      navigate('/dashboard');
    }
  }, [navigate, route]);

  // Render the Dashboard component and its children only if authenticated
  return isAuthenticated ? <Dashboard /> : children;
}
