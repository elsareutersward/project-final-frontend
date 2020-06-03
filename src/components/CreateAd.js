import React, { useState } from 'react';
import { user } from '../reducers/user';
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL } from '../App';

export const CreateAd = () => {
  const dispatch = useDispatch();
  const user = '1' /* useSelector((store) => store.user.signin.userId); */
  const [title, setTitle] = useState('');
  const [info, setInfo] = useState('');
  const [price, setPrice] = useState('');
  

  const submitAd = (event) => {
    event.preventDefault();
    fetch(`${BASE_URL}/ads`, {
      method: 'POST',
      body: JSON.stringify({ title: title, info: info, price: price, seller: user }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => {
        if (!res.ok) {
          throw 'Could not create ad. Please try again.';
        }
        return res.json();
      })
      .then(() => {
        setTitle('')
        setInfo('')
        setPrice('')
      })
      .catch((err) => {
        dispatch(user.actions.setErrorMessage({ errorMessage: err }));
      });
  };

  return (
    <div> 
      <form onSubmit={submitAd}>
          <label>
            <input
              type='text'
              placeholder='Title'
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              minLength='2'
              required
            />
          </label>
          <label>
            <textarea
              placeholder='Info'
              value={info}
              onChange={(event) => setInfo(event.target.value)}
              required
            />
          </label>
          <label>
            <input
              type='Number'
              placeholder='Price'
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              required
            />
          </label>
          <label>
            <button type='submit'>Create ad</button>
          </label>
        </form>
    </div>
  );
};