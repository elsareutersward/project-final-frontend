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
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div> 
      <Form onSubmit={handleSignup} height={'300px'} width={'30%'} font={'24px'}>
          <label>
            <TextInput
              border={'none'}
              borderBottom={'#f1f1f1 3px solid'} 
              backgroundColor={'#f5e1da'}
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
              border={'none'}
              borderBottom={'#f1f1f1 3px solid'} 
              backgroundColor={'#f5e1da'}
              type='email'
              placeholder='Email'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </label>
          <label>
            <TextInput
              border={'none'}
              borderBottom={'#f1f1f1 3px solid'} 
              backgroundColor={'#f5e1da'}
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