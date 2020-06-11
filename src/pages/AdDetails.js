import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import moment from 'moment';
import { BASE_URL } from '../App';
import { DetailHolder } from '../lib/DetailsStyilng';

export const AdDetails = () => {
  const { _id } = useParams();
  const AD_URL = `${BASE_URL}/posts?id=${_id}`;
  const [ad, setAd] = useState();

  useEffect(() => {
    fetch(AD_URL)
      .then(res => res.json())
      .then(json => setAd(json))
  }, [AD_URL, _id]);

  if(!ad) {
    return <></>;
  };

  return (
    <DetailHolder>
      <h1>{ad.title}</h1>
      <h2>{ad.price} kr</h2>
      <h3>{ad.info}</h3>
      <h4>Sold by: <Link to={`/seller/${ad.sellerId}`}> {ad.sellerName}</Link></h4>
      <h4>{moment(ad.createdAt).fromNow()}</h4>
    </DetailHolder>
  );
}