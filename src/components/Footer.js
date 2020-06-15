import React from 'react';
import styled from 'styled-components';

export const Footer = () => {
  return (
    <FooterHolder>
      <p>Elsa Reuterswärd</p>
    </FooterHolder>
  )
}

const FooterHolder = styled.section`
  background-color: #1fab89;
  color: #d7fbe8;
  height: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  padding: 20px;
  width: 100%;
  position: absolute;
  bottom: 0;

  a, &:visited  {
    text-decoration: none;
    color: #d7fbe8;
  }
`;