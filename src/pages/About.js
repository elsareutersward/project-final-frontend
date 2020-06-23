import React from 'react';
import styled from 'styled-components';

export const About = () => {
  return (
    <Holder>
      <Title>What is Thrifty?</Title>
      <Text>
        <LineDot></LineDot>
        Hi! My name is Elsa and I'm the creator of Thrifty! Thrifty was built as a
        mock site for my final project during the Technigo Frontend Bootcamp.
        The aim of the project was to use all the techniques I've learnt during the
        Bootcamp in a real project. Thrifty was built with a front-end in React and 
        Redux, a back-end in Node.js, a MongoDB database, navigation using React Router 
        and styling using styled components. The site is responsive and works well on 
        mobile, tablet and web. 
      </Text>
      <a href='https://elsa-reutersward-portfolio.netlify.app/'>
        To see other projects from me you can visit my portfolio <Span>here</Span>!
      </a>
      <TextTopMargin>
        Enjoy the site!
      </TextTopMargin>
      <TextNoMargin>
        Elsa
      </TextNoMargin>
    </Holder>
  );
};

const Holder = styled.section`
  text-align: justify;
  width: 60%; 
  margin: 40px auto;

  a, :visited {
    text-decoration: none;
    color: black;
    cursor: pointer;
    font-size: 24px;

    @media (max-width: 769px) {
      font-size: 20px;
    }
  }

  @media (max-width: 769px) {
    width: 80%;
    margin: 40px auto;
  }
`;
const Title = styled.h1`
  font-size: 38px;
  font-weight: bold;
  margin: 0px;
  color: #40a798;

  @media (max-width: 769px) {
    font-size: 28px;
  }
`;
const Text = styled.p`
  font-size: 24px;

  @media (max-width: 769px) {
    font-size: 20px;
  }
`;
const TextTopMargin = styled.p`
  font-size: 24px;
  margin: 20px 0px 0px 0px;

  @media (max-width: 769px) {
    font-size: 20px;
  }
`;
const TextNoMargin = styled.p`
  font-size: 24px;
  margin: 0px;

  @media (max-width: 769px) {
    font-size: 20px;
  }
`;
const Span = styled.span`
  font-weight: bold;
  color: #40a798;
`;
const LineDot = styled.span`
  height: 3px;
  width: 50px;
  background-color: #40a798;
  position: relative;
  float: left;
  top: 12px;
  margin-right: 10px;

  &:after {
    height: 11px;
    width: 11px;
    background-color: #40a798;
    border-radius: 50%;
    position: relative;
    content: "";
    float: right;
    top: -4px;
  }
`;