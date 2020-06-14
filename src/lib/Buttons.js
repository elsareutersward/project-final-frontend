import styled from 'styled-components'

export const Holder = styled.section`
  padding: 40px;
  display: flex;
  justify-content: space-around;
`
export const SignButton = styled.button`
  background-color: #f1f1f1;
  border-radius: 8px;
  border: none;
  padding: 10px 15px;
  color: gray;
  font-size: 20px;
  cursor: pointer;
  margin: 10px 5px;
  
  &:hover {
    font-weight: bold;
  }
`
export const Buttons = styled.button`
  background-color: #62d2a2;
  border-radius: 10px;
  border: none;
  padding: 10px 15px;
  color: #d7fbe8;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }
`
