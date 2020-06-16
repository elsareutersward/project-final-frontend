import React, { useState, useEffect } from 'react';
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
    <section>
      <h1>{conversation.info.name}</h1>
      <MessageInput conversationId={_id} />
      {
        conversation.messages.map(message =>
        <MessageList {...message} key={message._id} />)
      }
    </section>
  );
}