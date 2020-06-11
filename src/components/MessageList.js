import React, {useState, useEffect} from 'react';
import { BASE_URL } from '../App';
import moment from 'moment';

export const MessageList =() => {
  const MESSAGES_URL = BASE_URL;
  const [messages, setMessages] = useState([]); 
  
  useEffect(() => {
      fetch(MESSAGES_URL)
      .then((response) => {
          return response.json();
      })
      .then(data => {
          const filteredData = data.filter(message => {
              return message.message;
          })
          setMessages(filteredData);
      })
  }, [MESSAGES_URL]);

  return (
    <div>
      {messages.map(message => (
      <div className='message-cards' key={message._id}>
          <p>{message.message}</p>
          <p className='message-sender'>{message.name === '' ? message.name : `/${message.name}`}</p>
          <div className='message-card-bottom'> 
            {moment(message.createdAt).fromNow()}
          </div>
      </div>
      ))}
    </div>
  )
}