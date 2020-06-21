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

  useEffect(() => {
      let messageListContainer = document.getElementById("scrolldiv");
      messageListContainer.scrollTop = messageListContainer.scrollHeight;
  });

  if(!conversation) {
    return <></>;
  };

  return (
    <Container>
      <section>
      <AdInfo>
        <Image src={conversation.info.image} alt='Image of product' /> 
        <AdText>
          <Text>{conversation.info.title}</Text>
          <span>{conversation.info.price} kr</span>
          <span>{conversation.info.location}</span>
          <span>{conversation.info.delivery}</span>
        </AdText>
      </AdInfo>
      <MessageInput conversationId={_id} />
      </section>
      <MessageListHolder
        id="scrolldiv"
      >
        {
          conversation.messages.map(message =>
          <MessageList {...message} key={message._id} />)
        }
      </MessageListHolder>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  justify-content: center;
  margin: 30px;
`;
const AdInfo = styled.section`
  display: flex; 
  flex-direction: row;
`;

const Image = styled.img`
  width: 200px;
`
const AdText = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 20px;
  font-size: 20px;
`
const Text = styled.span`
  font-weight: bold;
  padding: 10px 0px;
`
const MessageListHolder = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
  height: 450px;
  overflow-y: auto;
`;
