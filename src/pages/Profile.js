import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AdsList } from './AdsList';
import { BASE_URL } from '../App';
import styled from 'styled-components';

export const Profile = () => {
  const userId = useSelector((store) => store.user.login.userId);
  const CONVERSATIONS_URL = `${BASE_URL}/conversations?userId=${userId}`;
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const [loading, setLoading] = useState(true);
  const [conversations, setConversations] = useState({
    sellerConversations: [], buyerConversations: []});
  
  useEffect(() => {
    if (accessToken) {
      setLoading(false);
    };
  }, [setLoading, accessToken]);

  useEffect(() => {
    fetch(CONVERSATIONS_URL, {
      headers: {Authorization: accessToken}
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error ('Unable to load content.');
      })
      .then((json) => setConversations(json))
      .catch((err) => console.error(err));
  }, [CONVERSATIONS_URL, accessToken]);

  return (
    <section>
      {!loading &&
        <section>
        <ProfileNavbar>
          <ProfileNavbarHolder>
            <Link to='/createAd'>Create new post</Link>
            <Link to='/conversations'>Private messages</Link>
          </ProfileNavbarHolder>
          <ProfileNavbarHolder>
            <Text>Buy requests sent to you: 
              <TextBold> {conversations.sellerConversations.length}</TextBold>
            </Text>
            <Text>Your buy requests: 
              <TextBold> {conversations.buyerConversations.length}</TextBold>
            </Text>
          </ProfileNavbarHolder>
        </ProfileNavbar>
        <AdsList ADS_URL={`${BASE_URL}/posts?userId=${userId}`}/>
        </section>
      }
    </section>
  );
};

const ProfileNavbar = styled.section`
  background-color: #d7fbe8;
  padding: 20px 40px; 
  display: flex;
  justify-content: space-between;

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
`;
const ProfileNavbarHolder = styled.div`
  @media (max-width: 769px) {
    display: flex; 
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 426px) {
    margin: 5px 0px;
  }
`
const Text = styled.span`
  font-size: 18px; 
  color: #1fab89;
  margin: 0px 20px;

  @media (max-width: 426px) {
    margin: 0px;
    font-size: 16px;
  }
`
const TextBold = styled.span`
  font-weight: bold;
`


