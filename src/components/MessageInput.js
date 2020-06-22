import React, { useState } from 'react';
import styled from 'styled-components';
import { BASE_URL } from '../App';
import { ErrorMessage } from './ErrorMessage';
import { useSelector } from 'react-redux';
import { FormMessage } from '../lib/FormsInputs';
import { TextAreaInput } from '../lib/FormsInputs';
import { SignButton } from '../lib/Buttons';

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
    <InputHolder>
      <FormMessage onSubmit={handleSubmit}>
        <TextAreaInput
          placeholder='Type your message here...'
          onChange={event => setMessage(event.target.value)}
        />
        <Validation color={lengthCheck() ? 'black' : 'red'}>
          {message.length}/140
        </Validation>
        {error && <ErrorMessage />}
        <SignButton  type='submit'>
          Send
        </SignButton>
      </FormMessage>
    </InputHolder>
  )
}

const InputHolder = styled.section`
  @media (max-width: 426px) {
    position: absolute;
    bottom: 0;
    margin-bottom: 50px;
    width: 80%;
  }
`;
const Validation = styled.div`
  color: ${props => props.color};
  align-self: flex-end;
  margin: 0px 10px;
  font-size: 18px;
`;
