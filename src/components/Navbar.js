import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Tooltip from 'react-tooltip-lite';
import '../lib/tooltip.css';
import { logout } from '../reducers/user';
import { SignIn } from '../components/SignIn';
import { LightButton } from '../lib/Buttons';

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
        <ContentHolder>
          <Text>
            <Link to='/'>Home</Link>
          </Text>
          <Text>About</Text>
          <Tooltip content={<SignIn />} direction='under'>
           <Text>Log in</Text>
          </Tooltip>
        </ContentHolder>
      :
        <LoggedInHolder>
          <WelcomeText>{`Welcome ${userName}`}</WelcomeText>
          <ContentHolder>
            <Link to='/profile'>
              <Text>My profile</Text>
            </Link>
            <Link to='/posts'>
              <Text>Thrift</Text>
            </Link>
            <LightButton onClick={() => handleLogout()}>
              Log out
            </LightButton>
          </ContentHolder>
        </LoggedInHolder>  
      }
    </NavbarHolder>
  )
}

const NavbarHolder = styled.section`
  background-color: #62d2a2;
  color: #d7fbe8;
  height: 200px;
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
const ContentHolder = styled.div`
  display: flex;
`;
const SiteName = styled.h1`
  font-size: 80px;
  margin: 0px 30px;
`;
const Text = styled.h2`
  font-size: 26px;
  margin: 0px 30px;
`;
const WelcomeText = styled.h2`
  font-size: 30px;
  font-weight: lighter;
  margin: 30px;
`;
const LoggedInHolder = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`