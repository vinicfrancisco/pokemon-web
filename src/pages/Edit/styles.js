import { shade } from 'polished';
import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
  width: 100%;

  > header {
    align-items: center;
    background: ${colors.black};
    display: flex;
    justify-content: center;
    padding: 24px;
    width: 100%;

    h1 {
      color: ${colors.white};
      font-size: 34px;
    }
  }

  section {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 24px 16px 0;
    width: 100%;

    header {
      align-items: flex-start;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      max-width: 990px;
      width: 100%;

      > div {
        align-items: flex-start;
        display: flex;
        flex-direction: row;

        svg {
          color: ${colors.primary};
          margin-right: 8px;
        }

        h2 {
          color: ${colors.primary};
          font-size: 26px;
          margin-bottom: 24px;
        }
      }
    }
  }
`;

export const Content = styled.div`
  background: ${colors.black};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  max-width: 990px;
  padding: 24px 16px;
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const AttackHeader = styled.div`
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

export const AttackContaier = styled.div`
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

export const Save = styled.button`
  align-self: flex-end;
  background: ${colors.primary};
  border: 0;
  border-radius: 6px;
  color: ${colors.softBlack};
  font-weight: 500;
  height: 38px;
  padding: 0 16px;
  transition: background-color 0.2s;
  width: 150px;

  &:hover {
    background: ${shade(0.2, colors.primary)};
  }
`;
