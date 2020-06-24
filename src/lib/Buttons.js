import styled from 'styled-components';

export const Holder = styled.section`
  padding: 40px;
  display: flex;
  justify-content: space-around;
`;
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
    background-color: lightgray;
  }

  @media (max-width: 425px) {
    font-size: 20px;
  }
`;
export const DarkButton = styled.button`
  background-color: ${props => props.backgroundColor};
  border-radius: 10px;
  border: none;
  padding: 10px 15px;
  color: #d7fbe8;
  font-size: 24px;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: ${props => props.backgroundColorHover};
  }
`;
export const DeleteButton = styled.button`
  background-color: #e23e57;
  border-radius: 10px;
  border: none;
  color: #FFFFFF;
  font-size: 26px;
  height: 40px;
  width: 40px;
  cursor: pointer;

  &:hover {
    background-color: #e31231;
  }
`;