import React from 'react';
import moment from 'moment';

export const MessageList =({ message, name }) => {
  return (
    <div>
      <p>{message}</p>
      <span>{name}</span>
      <span>{moment(message.createdAt).fromNow()}</span>
    </div>
  )
}