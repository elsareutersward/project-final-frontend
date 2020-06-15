import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
 
export const AdCard = ({ _id, imageUrl, title, price, location, delivery }) => {
  return (
    <CardContainer>
      <Link to={`/posts/${_id}`}>
        <Image src={imageUrl} alt='Product image' />
        <AdTitle>{title}</AdTitle>
        <TextBold>{price} kr</TextBold>
        <TextHolder>
          <Text>{location}</Text>
          <Text>{delivery}</Text>
        </TextHolder>
      </Link>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  width: 20%;
  margin: 20px;
  padding-bottom: 20px;
  background-color: #f1f1f1;
  opacity: 80%;
  filter: grayscale(40%);

  a, &:visited {
    text-decoration: none;
  }
  &:hover {
    opacity: 100%;
    filter: grayscale(0%);
  }
`;
const Image = styled.img`
  width: 100%;
`
const AdTitle = styled.h1`
  font-size: 20px;
  color: #1fab89;
  margin: 20px 20px 0px 20px;
`;
const TextHolder = styled.div`
  display: flex; 
  flex-direction: column;
  align-items: flex-end;
`;
const Text = styled.span`
  margin: 0px 20px;
  font-size: 18px;
`;
const TextBold = styled.span`
  margin: 0px 20px;
  font-size: 18px;
  font-weight: bold;
`;