import styled from 'styled-components';

export const ContactItem = styled.li`
  font-size: 25px;
  font-weight: 500;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NameNumber = styled.p`
  margin: 0;
`;

export const Button = styled.button`
  text-align: center;
  background-color: #fff;
  font-size: 15px;
  width: 70px;
  color: #000;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #4682b4;
  }
`;
