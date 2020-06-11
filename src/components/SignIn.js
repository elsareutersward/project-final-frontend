import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signin } from '../reducers/user';

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
    <div> 
      <form onSubmit={handleSignin}>
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
            <button type='submit'>Sign in</button>
          </label>
        </form>
    </div>
  );
};