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
      .then((res) => res.json())
      .then((json) => setConversations(json))
  }, [CONVERSATIONS_URL, accessToken]);

  return (
    <ListHolder>
      <div>
        { conversations.sellerConversations.length > 0 &&
          <Heading>Selling</Heading> }
        {conversations.sellerConversations.map(conversation => 
            <ConversationCard 
              postId={conversation._id} 
              name={conversation.name}
              otherUsersId={`Buyer: ${conversation.sellerId}`}
              key={conversation._id}
            />
          )
        }
      </div>
      <div>
        { conversations.buyerConversations.length > 0 &&
          <Heading>Buying</Heading> }
        {conversations.buyerConversations.map(conversation => 
            <ConversationCard 
              postId={conversation._id} 
              name={conversation.name}
              otherUsersId={`Seller: ${conversation.sellerId}`}
              key={conversation._id}
            />
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