import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { Link } from 'react-router-dom';
 
export const ConversationCard = ({ postId, name, otherUsersId, image, date }) => {
  return (
    <Container>
      <Link to={`/conversations/${postId}`}>
        <CardHolder image={image}>
          <TextBold>{name}</TextBold>
          <Holder>
            <Text>{otherUsersId}</Text>
            <TextDate>Sent: {moment(date).fromNow()}</TextDate>
          </Holder>
        </CardHolder>
      </Link>
    </Container>
  );
};

const Container = styled.section`
  margin: 0px 30px 20px 30px;

  a, :visited {
      text-decoration: none;
      color: black;
    }
`;
const CardHolder = styled.section`
  background: linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), 
              ${props => `url(${props.image}) no-repeat center`};
  width: 350px;
  margin: 0px;
  padding: 20px;
  border-bottom: 1.5px solid #62d2a2;
  border-top: 1.5px solid #62d2a2;
  cursor: pointer;

  &:hover {
    background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), 
                ${props => `url(${props.image}) no-repeat center`};
  }

  @media (max-width: 769px) {
    width: 100%;
  }
  @media (max-width: 426px) {
    width: 100%;
  }
`;
const TextBold = styled.p`
  font-size: 18px;
  font-weight: 700;
  text-shadow: 0px 0px 1px white;
`;
const Text = styled.p`
  font-size: 18px;
  margin: 5px 0px;
  font-weight: 600;
  text-shadow: 0px 0px 1px white;
`;
const TextDate = styled.p`
  font-size: 16px;
  margin: 5px 0px;
  font-weight: 600;
  text-shadow: 0px 0px 1px white;
`;
const Holder = styled.p`
  display: flex; 
  justify-content: space-between;
  margin: 0px;
`;
