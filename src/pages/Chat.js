import React from 'react';
import { MessageInput } from '../components/MessageInput';
import { MessageList } from '../components/MessageList';

export const Chat = () => {
  return (
    <div>
      <MessageInput />
      <MessageList />
    </div>
  )
}