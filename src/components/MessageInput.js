import React, { useState } from 'react';
import { BASE_URL } from '../App';
import { ErrorMessage } from './ErrorMessage';
import { useSelector } from 'react-redux';

export const MessageInput = ({ conversationId }) => {
  const MESSAGES_URL = `${BASE_URL}/message`;
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const userId = useSelector((store) => store.user.login.userId);
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
      
  const handleSubmit = event => {
    event.preventDefault();

    let myHeaders = new Headers();
    myHeaders.append('Authorization', accessToken)
    myHeaders.append('Content-Type', 'application/json')

    fetch(MESSAGES_URL, 
      {
        method: 'POST',
        headers: myHeaders, 
        body: JSON.stringify({message: message, name: userId, conversation: conversationId })
      })
    .then(response => {
      response.ok ? window.location.reload() : setError(true);
    })
  }

  const lengthCheck = () => {
    return (message.length > 4 && message.length < 141)
  }

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit} className='form'>
        <textarea
          placeholder='Type your thought here...'
          className='form-text'
          onChange={event => setMessage(event.target.value)}
        />
        <div className={lengthCheck() ? 'validation-black' : 'validation-red'}>
          {message.length}/140
        </div>
        {error && <ErrorMessage />}
        <button type='submit'>
          <p>Send</p>
        </button>
      </form>
    </div>
  )
}