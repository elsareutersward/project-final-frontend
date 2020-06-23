import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { AdsList } from './AdsList';
import { BASE_URL } from '../App';


export const Seller = () => {
  const { sellerId } = useParams();
  const SELLER_URL = `${BASE_URL}/seller/${sellerId}`;
  const [ sellerInfo, setSellerInfo ] = useState();

  useEffect(() => {
    fetch(SELLER_URL)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error ('Unable to load content.');
    })
    .then((json) => setSellerInfo(json))
    .catch((err) => console.error(err))
  }, [SELLER_URL, sellerId]);

  if(!sellerInfo) {
    return <></>;
  };

  return (
    <section>
      <Header>All posts by {sellerInfo.sellerName}</Header>
      <AdsList ADS_URL={`${BASE_URL}/posts?userId=${sellerId}`}/>
    </section>
  );
};

const Header = styled.h1`
  color: #1fab89;
  text-align: center;
  margin-top: 30px;
`;