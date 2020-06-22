import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AdsList } from './AdsList';
import { BASE_URL } from '../App';
import styled from 'styled-components';

export const Profile = () => {
  const id = useSelector((store) => store.user.login.userId);
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    if (accessToken) {
      setLoading(false)
    }
  })

  return (
    <section>
      {!loading &&
        <section>
        <ProfileNavbar>
          <Link to='/createAd'>Create new post</Link>
          <Link to='/conversations'>Private messages</Link>
          <Link to='/chat'>Message board</Link>
        </ProfileNavbar>
        <AdsList ADS_URL={`${BASE_URL}/posts?userId=${id}`}/>
        </section>
      }
    </section>
  );
};

const ProfileNavbar = styled.section`
  background-color: #d7fbe8;
  padding: 20px 40px; 

  a, :visited {
    text-decoration: none;
    font-size: 20px; 
    color: #1fab89;
    margin: 0px 20px;
  }

  @media (max-width: 426px) {
    display: flex; 
    flex-direction: column;
    align-items: center;
  }
`


