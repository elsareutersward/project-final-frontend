import React, { useState } from 'react';
import { user } from '../reducers/user';
import { DarkButton } from '../lib/Buttons';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { BASE_URL } from '../App';
import swal from 'sweetalert';

export const BuyButton = ({ title, adId, seller }) => {
  const BUY_URL = `${BASE_URL}/conversation`;
  const dispatch = useDispatch();
  const history = useHistory();
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const userId = useSelector((store) => store.user.login.userId);

  const handleBuyRequest = () => {
    let myHeaders = new Headers();
    myHeaders.append('Authorization', accessToken)
    myHeaders.append('Content-Type', 'application/json')

    fetch(BUY_URL, {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({ name: title, adId, sellerId: seller, buyerId: userId }),
    })
      .then((res) => {
        if (res.ok) { return res.json }
        throw new Error('Could not perform request. Please try again.');
      })
      .then((json) => {
        swal("Congratulations!", `You sent a buy request to ${seller}!`, "success");
        history.push(`/conversations/${json._id}`);
      })
      .catch((err) => {
        dispatch(user.actions.setErrorMessage({ errorMessage: err.message }));
      });
  };

  return (
    <DarkButton 
      onClick={() => handleBuyRequest()}
      backgroundColor={'#62d2a2'}
    >
      Send a buy request
    </DarkButton>
  )
}