import React from 'react';
import { user } from '../reducers/user';
import { DarkButton } from '../lib/Buttons';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { BASE_URL } from '../App';
import swal from 'sweetalert';
import Tooltip from 'react-tooltip-lite';
import '../lib/tooltip.css';

export const BuyButton = ({ title, adId, sellerId, sellerName }) => {
  const BUY_URL = `${BASE_URL}/conversation`;
  const dispatch = useDispatch();
  const history = useHistory();
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const userId = useSelector((store) => store.user.login.userId);

  const handleBuyRequest = () => {
    let myHeaders = new Headers();
    myHeaders.append('Authorization', accessToken);
    myHeaders.append('Content-Type', 'application/json');
    
    fetch(BUY_URL, {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({ name: title, adId, sellerId, buyerId: userId }),
    })
      .then((res) => {
        if (res.ok) { return res.json() }
        throw new Error('Could not perform request. Please try again.');
      })
      .then((json) => {
        swal('Congratulations!', `You sent a buy request to ${sellerName}! Redirecting to your request now!`, 'success');
        history.push(`/conversations/${json._id}`);
      })
      .catch((err) => {
        dispatch(user.actions.setErrorMessage({ errorMessage: err.message }));
      });
  };

  if (userId === sellerId) {
    return (
        <Tooltip content={'Cannot send buy request on own product, silly!'} direction='under'>
          <DarkButton 
            onClick={() => handleBuyRequest()}
            backgroundColor={'#62d2a2'}
            backgroundColorHover={'#56c495'}
            disabled
          >
            Send a buy request
          </DarkButton>
        </Tooltip>
      );
  } else if (!userId) {
    return (
      <Tooltip content={'Log in or sign up to thrift!'} direction='under'>
        <DarkButton 
          onClick={() => handleBuyRequest()}
          backgroundColor={'#62d2a2'}
          backgroundColorHover={'#56c495'}
          disabled
        >
          Send a buy request
        </DarkButton>
      </Tooltip>
    );
  } else {
    return (
      <DarkButton 
          onClick={() => handleBuyRequest()}
          backgroundColor={'#62d2a2'}
          backgroundColorHover={'#56c495'}
        >
          Send a buy request
        </DarkButton>
    );
  };
};

