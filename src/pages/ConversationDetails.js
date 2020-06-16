import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BASE_URL } from '../App';
import { MessageInput } from '../components/MessageInput'
import { MessageList } from '../components/MessageList';

export const ConversationsDetails = () => {
  const { _id } = useParams();
  const CONVERSATION_URL = `${BASE_URL}/conversation/${_id}`;
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const [conversation, setConversation] = useState({ info: {}, messages: [] });

  useEffect(() => {
    fetch(CONVERSATION_URL, {
      headers: {Authorization: accessToken}
    })
      .then(res => res.json())
      .then(json => {
        console.log(json)
        setConversation(json)})
  }, [CONVERSATION_URL, accessToken]);

  if(!conversation) {
    return <></>;
  };

  return (
    <Container>
      <section>
      <section>
        <div>
          <h1>{conversation.info.title}</h1>
          <span>{conversation.info.price}</span>
          <span>{conversation.info.location}</span>
          <span>{conversation.info.delivery}</span>
        </div>
        <img src={conversation.info.image} alt='Image of product' />
      </section>
      <MessageInput conversationId={_id} />
      </section>
      {
        conversation.messages.map(message =>
        <MessageList {...message} key={message._id} />)
      }
    </Container>
  );
}

const Container = styled.section`
  display: flex;
`;
const AdInfo = styled.section`
  
`;
