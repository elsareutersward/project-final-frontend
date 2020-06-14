import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { Buttons } from '../lib/Buttons';

export const StartPage = () => {
  return (
    <Holder>
      <Image src={process.env.PUBLIC_URL + '/assets/recycle.jpg'} alt='Trift shopping' />
      <TextHolder>
        <Welcome>WELCOME TO THRIFTY</Welcome>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
        <Link to='/posts'>
          <Buttons>START THRIFTING</Buttons>
        </Link>
      </TextHolder>
    </Holder>
  );
}

const Holder = styled.section`
  padding: 40px;
  display: flex;
  justify-content: space-around;
  color: #62d2a2;
`;
const Image = styled.img`
  max-width: 40%;
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
`;
const Text = styled.p`
  font-size: 30px;
`