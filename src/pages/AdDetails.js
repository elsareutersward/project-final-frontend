import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export const MoviesDetails = () => {
  const {id} = useParams();
  const Ad_URL = ``;
  const history = useHistory();
  const [ad, setAd] = useState();

  useEffect(() => {
    fetch(AD_URL)
      .then(res => {
        setStatusCode(res.status);
        return res.json();
      })
      .then(json => {setMovie(json)})
  }, [AD_URL, id]);

  useEffect(() => {
    if (statusCode !== 200) {
      history.push('/ads')
    }
  }, [statusCode, history]);

  if(!movie) {
    return <></>;
  };

  return (
    <section>
      <img src='' alt='' />
      <h2>{title}</h2>
    </section>
  );
}