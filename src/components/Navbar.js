import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'
import { logout } from '../reducers/user';
import { SignIn } from '../components/SignIn';
import { SignUp } from '../components/SignUp';
import { NavbarHolder, SigninHolder } from '../lib/NavbarStyling';


export const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const userName = useSelector((store) => store.user.login.userName);

  const handleLogout = () => {
    dispatch(logout());
    history.push('/');
  }

  return (
    <NavbarHolder>
      <Link to='/'>
        <button>Back to start</button>
      </Link>
      {!accessToken ? 
        <SigninHolder>
          <SignIn />
          <SignUp />
        </SigninHolder>
      :
        <SigninHolder>
          <h1>{`Welcome ${userName}`}</h1>
          <button onClick={() => handleLogout()}>Log out</button>
        </SigninHolder>
      }
    </NavbarHolder>
  )
}