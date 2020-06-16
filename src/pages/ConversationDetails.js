import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import swal from 'sweetalert';
import moment from 'moment';
import { BASE_URL } from '../App';
import { DeleteButton } from '../lib/Buttons';
import { BuyButton } from '../components/BuyButton';

export const ConversationsDetails = () => {
  const { _id } = useParams();
  const history = useHistory();
  const CONVERSATION_URL = `${BASE_URL}/conversation/${_id}`;
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const loggedInUser = useSelector((store) => store.user.login.userId);
  const [ad, setAd] = useState();

  useEffect(() => {
    fetch(CONVERSATION_URL)
      .then(res => res.json())
      .then(json => setAd(json))
  }, [CONVERSATION_URL, _id]);

  if(!ad) {
    return <></>;
  };

  return (
    <section>

    </section>
  );
}