import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoaderWrapper = styled.div`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  min-height: 100vh;
  background-color: #F5F7F8;
`;

export const LoaderIcon = styled.div`
  animation: ${spinAnimation} 2s linear infinite;
  border: 10px solid #2A2F33;
  border-radius: 50%;
  border-top: 10px solid #F55661;
  width: 60px;
  height: 60px;
`;