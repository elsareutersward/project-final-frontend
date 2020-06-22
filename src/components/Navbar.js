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
        <SubTitle>
          <Link to='/'>The thriftiness archive</Link>
        </SubTitle>
      </div>
      {!accessToken ? 
        <ContentHolder>
          <Text>
            <Link to='/'>Home</Link>
          </Text>
          <Text>About</Text>
          <Tooltip content={<SignIn />} eventToggle='onClick' direction='under'>
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
            <Text onClick={() => handleLogout()}>Log out</Text>
          </ContentHolder>
        </LoggedInHolder>  
      }
    </NavbarHolder>
  )
}

const NavbarHolder = styled.section`
  background-color: #62d2a2;
  color: #d7fbe8;
  height: 190px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  a, &:visited  {
    text-decoration: none;
    color: #d7fbe8;
  }

  @media (max-width: 426px) {
    height: auto;
    flex-direction: column;
    justify-content: center;
  }
`;
const ContentHolder = styled.div`
  display: flex;

  @media (max-width: 426px) {
    justify-content: space-evenly;
    width: 100%;
  }
`;
const SiteName = styled.h1`
  font-size: 80px;
  margin: 0px 30px;

  @media (max-width: 426px) {
    font-size: 50px;
  }
`;
const SubTitle = styled.h2`
  font-size: 26px;
  margin: 0px 30px;
  cursor: pointer;
  
  @media (max-width: 426px) {
    font-size: 20px;
  }
`;
const Text = styled.h2`
  font-size: 26px;
  margin: 0px 30px;
  cursor: pointer;
  
  @media (max-width: 426px) {
    font-size: 20px;
    margin: 0px 10px;
  }

  @media (max-width: 321px) {
    font-size: 18px;
  }
`;
const WelcomeText = styled.h2`
  font-size: 30px;
  font-weight: lighter;
  margin: 30px;

  @media (max-width: 426px) {
    font-size: 24px;
    margin: 30px auto 10px auto;
  }
`;
const LoggedInHolder = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 426px) {
    align-items: flex-start;
    width: 100%;
  }
`