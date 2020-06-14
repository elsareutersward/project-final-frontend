import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signup } from '../reducers/user';
import { Form, TextInput } from '../lib/FormsInputs';
import { SignButton } from '../lib/Buttons';

export const SignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (event) => {
    event.preventDefault();
    dispatch(signup(name, email, password));
    history.push('/profile');
    setEmail('');
    setPassword('');
  };

  return (
    <div> 
      <Form onSubmit={handleSignup}>
          <label>
            <TextInput
              type='text'
              placeholder='User name'
              value={name}
              onChange={(event) => setName(event.target.value)}
              minLength='2'
              required
            />
          </label>
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
            <SignButton type='submit'>Sign up</SignButton>
          </label>
        </Form>
    </div>
  );
};