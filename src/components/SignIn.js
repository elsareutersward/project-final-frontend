import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signin } from '../reducers/user';
import { TextInput } from '../lib/FormsInputs';
import { SignButton } from '../lib/Buttons'

export const SignIn = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignin = (event) => {
    event.preventDefault();
    dispatch(signin(email, password));
    history.push('/profile');
    setEmail('');
    setPassword('');
  };

  return (
    <Holder> 
      <form onSubmit={handleSignin}>
        <label>
          <TextInput
            type='email'
            placeholder='Email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>
        <label>
          <TextInput
            type='password'
            placeholder='Password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            minLength='6'
            required
          />
        </label>
        <label>
          <SignButton type='submit'>Sign in</SignButton>
        </label>
      </form>
      <Text>New user?</Text>
      <Link to='/createaccount'>
        <SignButton>Create account</SignButton>
      </Link>
    </Holder>
  );
};

const Holder = styled.section`
  font-size: 20px;
  text-align: center;
`;
const Text = styled.span`
  margin: 5px 10px;
  color: gray;
`;