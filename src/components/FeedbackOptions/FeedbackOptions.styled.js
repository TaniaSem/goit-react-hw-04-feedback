import styled from 'styled-components';

export const BtnBox = styled.div`
  display: flex;
  gap: 30px;
`;

export const Buttons = styled.button`
  padding: 10px 15px;
  border-radius: 8px;
  border: 2px solid #eee;
  color: #eee;
  background: #1f5a41;
  cursor: pointer;
  width: 100px;
  font-weight: 600;

  :hover,
  :focus {
    color: #1f5a41;
    background-color: #eee;
    border: 2px solid #1f5a41;
  }
`;
