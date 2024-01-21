import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
// import { useAuth0 } from '@auth0/auth0-react';
// will remove later
import { useUserContext } from '../context/user_context';

const PrivateRoute = () => {
  const { authenticated } = useUserContext()
  return authenticated ? <Outlet /> : <Navigate to='/login' />
};

// for Auth0 lib:
// const {user} = useAuth0()

// const PrivateRoute = ({children, ...rest}) => {
//   const { myUser } = useUserContext()
//   return <Route {...rest} render={() => {
//     return user ? children : <Navigate to='/' />
//   }}></Route>
// };
export default PrivateRoute;
