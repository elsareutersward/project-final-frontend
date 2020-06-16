import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ConversationCard } from '../components/ConversationCard'
import { BASE_URL } from '../App';
import { useSelector } from 'react-redux';

export const ConversationsList = () => {
  const userId = useSelector((store) => store.user.login.userId);
  const CONVERSATIONS_URL = `${BASE_URL}/conversations?userId=${userId}`;
  const [conversations, setConversations] = useState({
    sellerConversations: [], buyerConversations: []});
  
  useEffect(() => {
    fetch(CONVERSATIONS_URL)
      .then((res) => res.json())
      .then((json) => setConversations(json))
  }, [CONVERSATIONS_URL]);

  return (
    <ListHolder>
      <div>
        <Heading>Selling</Heading>
        {conversations.sellerConversations.map(conversation => 
            <ConversationCard {...conversation} key={conversation._id}/>
          )
        }
      </div>
      <div>
        <Heading>Buying</Heading>
        {conversations.buyerConversations.map(conversation => 
            <ConversationCard {...conversation} key={conversation._id}/>
          )
        }
      </div>
    </ListHolder>
  );
}

const ListHolder = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;
const Heading = styled.h1`
  font-size: 24px;
  color: #1fab89;
  text-align: center;
`;