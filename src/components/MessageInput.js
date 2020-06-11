import React, { useState } from 'react';
import { BASE_URL } from '../App';
import { ErrorMessage } from './ErrorMessage';

export const MessageInput = () => {
  const MESSAGES_URL = BASE_URL;
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState(false);
      
  const handleSubmit = event => {
    event.preventDefault();
    fetch(MESSAGES_URL, 
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify({message: message, name: name})
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
      <p>What's making you happy right now?</p>
      <form onSubmit={handleSubmit} className='form'>
        <textarea
          placeholder='Type your thought here...'
          className='form-text'
          onChange={event => setMessage(event.target.value)}
        />
        <div className={lengthCheck() ? 'validation-black' : 'validation-red'}>
          {message.length}/140
        </div>
        <div>
          <span>Happy thought from:</span>
          <input
            type='text'
            placeholder='Name'
            className='form-text-name'
            onChange={event => setName(event.target.value)}
          />
        </div>
        {error && <ErrorMessage />}
        <button type='submit'>
          <p className='heart-button-text'>Send Happy Thought</p>
        </button>
      </form>
    </div>
  )
}