import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AdsList } from './AdsList';
import { BASE_URL } from '../App';
import styled from 'styled-components';

export const Profile = () => {
  const id = useSelector((store) => store.user.login.userId);
  
  return (
    <ProfileHolder>
      <Link to='/createAd'>Create a new ad</Link>
      <Link to='/chat'>Message board</Link>
      <AdsList ADS_URL={`${BASE_URL}/posts?userId=${id}`}/>
    </ProfileHolder>
  );
};

const ProfileHolder = styled.section`
  margin: 50px 100px;
`
