// import { useNavigate } from 'react-router-dom';

// export function AuthenticatedRedirects({ children }) {
//   const navigate = useNavigate();

//   const isAuthenticated = localStorage.getItem('token') !== null;

//   if (isAuthenticated) {
//     navigate('/dashboard', { replace: true });
//     return null;
//   }

//   return children;
// }