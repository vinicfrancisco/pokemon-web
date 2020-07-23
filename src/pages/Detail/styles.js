import styled from 'styled-components';

import colors from '../../styles/colors';

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

      > a {
        align-items: flex-start;
        color: ${colors.white};
        display: flex;
        flex-direction: row;
        transition: color 0.5s;

        svg {
          margin-right: 8px;
        }

        h2 {
          font-size: 26px;
          margin-bottom: 24px;
          line-height: 24px;
        }

        &:hover {
          color: ${colors.primary};
        }
      }
    }
  }
`;

export const Pokemon = styled.div`
  align-self: center;
  background: ${colors.black};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;

  img {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    margin: 0 auto;
    max-width: 600px;
    width: 100%;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 16px;
    width: 100%;

    > h3 {
      color: ${colors.primary};
      font-size: 28px;
    }

    > span {
      margin-top: 12px;
    }
  }
`;

export const Attacks = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;

  h4 {
    color: ${colors.white};
    font-size: 18px;
  }

  > div + div {
    margin-top: 8px;
  }

  > div {
    align-items: center;
    background: ${colors.softBlack};
    border-radius: 6px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 8px;
    padding: 16px;

    h5 {
      color: ${colors.primary};
      font-size: 18px;
    }

    div {
      display: flex;
      flex-direction: column;

      span {
        margin-top: 8px;
      }
    }
  }
`;

export const Damage = styled.h2`
  font-size: 36px;
`;

export const Types = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 8px;

  > span {
    background: ${colors.softBlack};
    border-radius: 16px;
    padding: 8px 16px;
  }

  > span + span {
    margin-left: 8px;
  }
`;
