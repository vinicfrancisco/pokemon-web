import styled from 'styled-components';

import colors from '../../../../styles/colors';

export const Header = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
  width: 100%;

  button {
    align-items: center;
    background: ${colors.primary};
    border-radius: 50%;
    border: none;
    display: flex;
    height: 30px;
    justify-content: center;
    width: 30px;

    svg {
      color: ${colors.black};
    }
  }
`;

export const AttackContainer = styled.div`
  background: ${colors.softBlack};
  border-radius: 6px;
  margin-bottom: 16px;
  padding: 16px;
  position: relative;
  width: 100%;

  > div {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    grid-gap: 16px;
  }

  button {
    align-items: center;
    background: ${colors.danger};
    border-radius: 50%;
    border: none;
    display: flex;
    height: 25px;
    justify-content: center;
    left: -10px;
    position: absolute;
    top: -10px;
    width: 25px;

    svg {
      color: ${colors.black};
    }
  }
`;
