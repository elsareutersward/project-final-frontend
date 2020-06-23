import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { DarkButton } from '../lib/Buttons';

export const StartPage = () => {
  return (
    <Holder>
      <Image src={process.env.PUBLIC_URL + '/assets/recycle.jpg'} alt='Trift shopping' />
      <TextHolder>
        <Welcome>WELCOME TO THRIFTY</Welcome>
        <Text>
          Thrifty is a site for selling and buying second hand items looking for a new home!
          Click the button below to start browsing, or log in to start selling and buying!
        </Text>
        <Link to='/posts'>
          <DarkButton backgroundColor={'#40a798'}>
            START THRIFTING
          </DarkButton>
        </Link>
      </TextHolder>
    </Holder>
  );
};

const Holder = styled.section`
  padding: 40px;
  display: flex;
  justify-content: space-around;
  color: #40a798;

  @media (max-width: 769px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 426px) {
    padding: 30px;
  }
`;
const Image = styled.img`
  max-width: 40%;

  @media (max-width: 769px) {
    max-width: 50%;
  }
  @media (max-width: 426px) {
    display: none;
  }
`;
const TextHolder = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
const Welcome= styled.h1`
  font-size: 40px;
  font-weight: bold;
  margin: 0px;

  @media (max-width: 769px) {
    font-size: 30px;
  }
`;
const Text = styled.p`
  font-size: 30px;

  @media (max-width: 769px) {
    font-size: 24px;
  }
  @media (max-width: 426px) {
    font-size: 20px;
  }
`;