import styled from 'styled-components';

export const Form = styled.form`
  background-color: #f5e1da;
  font-size: ${props => props.font};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: ${props => props.height};
  width: ${props => props.width};
  margin: 50px auto;
  border-radius: 20px;

  @media (max-width: 769px) {
    margin: 30px auto;
    padding: 10px;
    width: 60%;
  }
  @media (max-width: 426px) {
    margin: 30px auto;
    padding: 10px;
    width: 80%;
  }
`;
export const FormMessage = styled.form`
  background-color: #f5e1da;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px auto;
  padding: 10px 40px;

  @media (max-width: 769px) {
    padding: 15px 15px 0px 15px;
  }
  @media (max-width: 426px) {
    margin: 30px auto;
    padding: 10px;
    width: 100%;
  }
`;
export const TextInput = styled.input`
  background-color: ${props => props.backgroundColor};
  border: ${props => props.border};
  border-bottom: ${props => props.borderBottom};
  font-size: 20px;
  margin: 10px;

  @media (max-width: 426px) {
    width: 100%;
    margin: 10px 0px;
    font-size: 18px;
  }
`;
export const TextAreaInput = styled.textarea`
  background-color: #f1f1f1;
  height: 100px; 
  width: 350px;
  border: none;
  border-bottom: #f1f1f1 5px solid;
  font-size: 20px;
  font-family: 'Open sans', sans-serif;
  margin: 10px;

  @media (max-width: 769px) {
    width: 100%;
    font-size: 18px;
    margin: 10px;
  }
  @media (max-width: 426px) {
    width: 100%;
    font-size: 18px;
    margin: 0px;
  }
`;
export const RadioInput = styled.input`
  font-size: 16px;
  margin: 5px 20px;
`;
export const Dropdown = styled.select`
  background-color: rgba(0, 0, 0, 0);
  color: black;
  border: none;
  font-size: 20px;
  margin: 10px;

  @media (max-width: 426px) {
    font-size: 18px;
  }
`;
