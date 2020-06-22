import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

export const MessageList =({ message, name }) => {
  return (
    <Holder>
      <p>{message}</p>
      <SpanHolder>
        <span>{name}</span>
        <span>{moment(message.createdAt).fromNow()}</span>
      </SpanHolder>
    </Holder>
  )
}

const Holder = styled.section`
  background-color: #f1f1f1;
  padding: 20px;
  margin-bottom: 20px;
  border-bottom: 1.5px solid #62d2a2;
  border-top: 1.5px solid #62d2a2;
  width: 450px;
  overflow-wrap: anywhere;

  @media (max-width: 426px) {
    width: 100%;
  }
`;
const SpanHolder = styled.div`
  display: flex; 
  justify-content: space-between;
`