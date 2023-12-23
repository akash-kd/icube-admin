import SignIn from "../pages/AuthPages/SignIn/index";
import SignUp from "../pages/AuthPages/register";
import { AuthenticatedRedirects } from "./AuthenticatedRedirects";

// Public Routes
// Routes for Authenticating Users
const routes = [
  // Authentication

  {
    path: '/auth/signIn',
    element: <AuthenticatedRedirects route="/auth/signIn"><SignIn /></AuthenticatedRedirects>,
  },
  {
    path: '/auth/signUp',
    element: <AuthenticatedRedirects route="/auth/signUp"><SignUp /></AuthenticatedRedirects>,
  },
  {
    path: '/',
    exact: true,
    element: <AuthenticatedRedirects route="/auth/signIn"><SignIn /></AuthenticatedRedirects>
  },
  {
    path: '/dashboard',
    element: <AuthenticatedRedirects route="/auth/signIn"><SignIn /></AuthenticatedRedirects>
  }
];

export { routes };
