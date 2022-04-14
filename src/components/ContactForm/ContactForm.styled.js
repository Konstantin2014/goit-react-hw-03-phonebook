import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 200px;
  padding: 20px;
  border: solid 2px #000;
  margin: auto;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 25px;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 300px;
  margin-bottom: 20px;
  margin-top: 10px;
  height: 25px;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    border-color: #4682B4;
   `;

export const Button = styled.button`
  text-align: center;
  background-color: #fff;
  font-size: 20px;
  width: 150px;
  color: #000;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #4682b4;
    color: #e6e6fa;
  }
`;

export const TitleContactFotm = styled.h1`
  font-size: 40px;
  text-align: center;
`;

export const TitleContact = styled.h2`
  font-size: 35px;
  text-align: center;
`;
