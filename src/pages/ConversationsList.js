import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ConversationCard } from '../components/ConversationCard';
import { BASE_URL } from '../App';
import { useSelector } from 'react-redux';

export const ConversationsList = () => {
  const userId = useSelector((store) => store.user.login.userId);
  const CONVERSATIONS_URL = `${BASE_URL}/conversations?userId=${userId}`;
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const [conversations, setConversations] = useState({
    sellerConversations: [], buyerConversations: []});
  
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
    <ListHolder>
      {conversations.sellerConversations.length < 1 
        && conversations.buyerConversations.length < 1 
        ?
        <Heading>No thrifting processes in progress</Heading>
        :
        null
      }
      <Navigation>
        <span id='top'>Go to:</span>
        <a href='#selling'>Selling</a>
        <a href='#buying'>Buying</a>
      </Navigation>
      <ListCardHolder>
        { conversations.sellerConversations.length > 0 &&
          <Heading id='selling'>Selling</Heading> }
        {conversations.sellerConversations.map(conversation => 
            <ConversationCard 
              postId={conversation._id} 
              name={conversation.name}
              otherUsersId={`Buyer: ${conversation.buyerId.name}`}
              image={conversation.adId.imageUrl}
              key={conversation._id}
            />
          )
        }
      </ListCardHolder>
      <ListCardHolder>
        { conversations.buyerConversations.length > 0 &&
          <Heading id='buying'>Buying</Heading> }
        {conversations.buyerConversations.map(conversation => 
            <ConversationCard 
              postId={conversation._id} 
              name={conversation.name}
              otherUsersId={`Seller: ${conversation.sellerId.name}`}
              image={conversation.adId.imageUrl}
              key={conversation._id}
            />
          )
        }
      </ListCardHolder>
      <Navigation>
        <a href='#top'> Go to top of page</a>
      </Navigation>
    </ListHolder>
  );
};

const ListHolder = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  @media (max-width: 426px) {
    flex-direction: column;
  }
`;
const ListCardHolder = styled.section`
  @media (max-width: 769px) {
    width: 50%;
  }
  @media (max-width: 426px) {
    width: 100%;
  }
`;
const Heading = styled.h1`
  font-size: 24px;
  color: #1fab89;
  text-align: center;
`;
const Navigation = styled.div`
  display: none;

  a, &:visited  {
    text-decoration: none;
    color: #1fab89;
    font-weight: bold;
  }

  @media (max-width: 426px) {
    display: flex;
    flex-direction: column;
    margin: 30px auto 0px 30px;
  }
`;