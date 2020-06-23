import React from 'react';
import styled from 'styled-components';

export const Footer = () => {
  return (
    <FooterHolder>
      <p>A site by: Elsa Reuterswärd</p>
      <p>A Project made during the Technigo Frontend Boot camp </p>
    </FooterHolder>
  );
};

const FooterHolder = styled.section`
  background-color: #62d2a2;
  color: #d7fbe8;
  height: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0px 20px;
  width: 100%;
  position: absolute;
  bottom: 0;

  a, &:visited  {
    text-decoration: none;
    color: #d7fbe8;
  }
`;