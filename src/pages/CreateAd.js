import React, { useState } from 'react';
import { user } from '../reducers/user';
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL } from '../App';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

export const CreateAd = () => {
  const CREATE_URL = `${BASE_URL}/posts`;
  const dispatch = useDispatch();
  const history = useHistory();
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const userId = useSelector((store) => store.user.login.userId);
  const [title, setTitle] = useState('');
  const [info, setInfo] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [delivery, setDelivery] = useState('');
  const [category, setCategory] = useState('');


  const submitAd = (event) => {
    event.preventDefault();
    fetch(CREATE_URL, {
      method: 'POST',
      headers: { Authorization: accessToken, 'Content-Type': 'application/json'},
      body: JSON.stringify({ title, info, price, category, location, delivery, seller: userId,  }),
    })
      .then((res) => {
        if (res.ok) { return res.json }
        throw 'Could not create ad. Please try again.';
      })
      .then((json) => {
        console.log(json)
        history.push(`/posts/${json._id}`)
      })
      .catch((err) => {
        dispatch(user.actions.setErrorMessage({ errorMessage: err }));
      });
  };

  return (
    <form onSubmit={submitAd}>
      <Holder> 
          <label>
            <input
              type='text'
              placeholder='Title'
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              minLength='5'
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
            <input
              type='String'
              placeholder='Location'
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              required
            />
          </label>
          <label for='delivery'>Choose a delivery option:</label>
          <label>
            <input
              type='radio'
              id='shipping'
              name='delivery'
              value={delivery}
              onChange={(event) => setDelivery(event.target.value)}
              checked
            />
            <label for='shipping'>Product can be shipped</label>
            <input
              type='radio'
              id='pickup'
              name='delivery'
              value={delivery}
              onChange={(event) => setDelivery(event.target.value)}
            />
            <label for='pickup'>Only pickup, no shipping</label>
          </label>
          <label>
            <select 
              value={category}
              onChange={event => setCategory(event.target.value)}
            >
              <option value='clothes'>Clothes</option>
              <option value='shoes'>Shoes</option>
              <option value='furniture'>Furniture</option>
              <option value='furniture'>Furniture</option>
              <option value='home'>Home ware</option>
              <option value='books'>Books</option>
              <option value='toys'>Toys</option>
              <option value='sport'>Sport gear</option>
            </select>
          </label>
          <label>
            <button type='submit'>Create ad</button>
          </label>
        </Holder>
      </form>
  );
};

const Holder = styled.section`
  margin: 50px 100px;
  display: flex;
  justify-content: space-evenly;
`
