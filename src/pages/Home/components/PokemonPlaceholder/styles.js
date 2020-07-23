import styled, { keyframes } from 'styled-components';

import colors from '../../../../styles/colors';

const pulse = keyframes`
  0% {
    opacity: 0.9;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0.9;
  }
`;

export const Container = styled.div`
  animation: ${pulse} 1s infinite ease-in-out;
  align-items: center;
  background: ${colors.black};
  border: 1px solid ${colors.black};
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  max-width: 330px;
  padding: 2px;
  width: 100%;

  div {
    animation: ${pulse} 1s infinite ease-in-out;
  }
`;

export const Image = styled.div`
  background: ${colors.softBlack};
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  height: 300px;
  margin: 0 auto;
  max-width: 330px;
  width: 100%;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 16px 8px;
  width: 100%;
`;

export const Name = styled.div`
  background: ${colors.softBlack};
  height: 30px;
  margin-bottom: 8px;
  width: 100px;
`;

export const Types = styled.div`
  background: ${colors.softBlack};
  height: 30px;
  width: 200px;
`;
