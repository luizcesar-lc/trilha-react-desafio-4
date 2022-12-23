import styled from 'styled-components';

export const ButtonContainer = styled.button`
  width: 100%;
  height: 42px;
  background-color: #275950;
  color: #fff;

  border: 1px solid #275950;
  border-radius: 21px;

  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.4;
    cursor: default;
  }
`;
