import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Tooltip from 'react-tooltip-lite';
import '../lib/tooltip.css';
import { logout } from '../reducers/user';
import { SignIn } from '../components/SignIn';

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
      <div>
        <SiteName>
          <Link to='/'>THRIFTY</Link>
        </SiteName>
        <Text>The thriftiness archive</Text>
      </div>
      {!accessToken ? 
        <SigninHolder>
          <Text>
            <Link to='/'>Home</Link>
          </Text>
          <Text>About</Text>
          <Tooltip content={<SignIn />} direction='under'>
           <Text>Log in</Text>
          </Tooltip>
        </SigninHolder>
      :
        <SigninHolder>
          <Link to='/profile'>
            <h1>{`Welcome ${userName}`}</h1>
          </Link>
          <button onClick={() => handleLogout()}>Log out</button>
        </SigninHolder>
      }
    </NavbarHolder>
  )
}

const NavbarHolder = styled.section`
  background-color: #62d2a2;
  color: #d7fbe8;
  height: 180px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  a, &:visited  {
    text-decoration: none;
    color: #d7fbe8;
  }
`;
const SigninHolder = styled.div`
  display: flex;
  align-self: flex-end;
`;
const SiteName = styled.h1`
  font-size: 80px;
  margin: 0px 30px;
`;
const Text = styled.h2`
  font-size: 30px;
  margin: 0px 30px;
`;