import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
 
export const ConversationCard = ({ _id, name, sellerId, buyerId }) => {
  return (
    <Container>
      <Link to={`/conversations/${_id}`}>
        <CardHolder>
          <TextBold>{name}</TextBold>
          <Text>Seller: {sellerId}</Text>
          <Text>Buyer: {buyerId}</Text>
        </CardHolder>
      </Link>
    </Container>
  );
}

const Container = styled.section`
  margin: 0px 30px;

  a, :visited {
      text-decoration: none;
      color: black;
    }
`
const CardHolder = styled.section`
  background-color: #f1f1f1;
  width: 350px;
  margin: 0px;
  padding: 20px;
  border-bottom: 1.5px solid #62d2a2;
  border-top: 1.5px solid #62d2a2;
  cursor: pointer;
`;
const TextBold = styled.p`
  font-size: 18px;
  font-weight: bold;
`;
const Text = styled.p`
  font-size: 18px;
  margin: 5px 0px;
`;