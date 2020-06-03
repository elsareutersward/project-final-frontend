import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../reducers/user';

export const SignUp = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (event) => {
    event.preventDefault();
    dispatch(signup(name, email, password));
  };

  return (
    <div> 
      <form onSubmit={handleSignup}>
          <label>
            <input
              type='text'
              placeholder='User name'
              value={name}
              onChange={(event) => setName(event.target.value)}
              minLength='2'
              required
            />
          </label>
          <label>
            <input
              type='email'
              placeholder='Email'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </label>
          <label>
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              minLength='6'
              required
            />
          </label>
          <label>
            <button type='submit'>Sign up</button>
          </label>
        </form>
    </div>
  );
};