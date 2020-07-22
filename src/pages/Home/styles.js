import { Link } from 'react-router-dom';

import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  > header {
    align-items: center;
    background: ${colors.black};
    display: flex;
    justify-content: center;
    padding: 24px;

    h1 {
      color: ${colors.white};
      font-size: 34px;
    }
  }

  section {
    padding: 24px 16px 0;

    header {
      align-items: flex-start;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;

      h2 {
        color: ${colors.primary};
        font-size: 26px;
        margin-bottom: 24px;
      }
    }

    > div {
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
  }
`;

export const PokemonCard = styled(Link)`
  align-items: center;
  background: ${colors.black};
  border: 1px solid ${colors.black};
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  transition: all 0.5s;
  width: 100%;

  &:hover {
    border-color: ${colors.primary};
    transform: translateY(-5px);
  }

  img {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    margin: 0 auto;
    padding: 1px 1px 0;
    width: 100%;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 16px 8px;
    width: 100%;

    h3 {
      color: ${colors.primary};
      font-size: 22px;
    }

    span {
      margin-top: 8px;
    }
  }
`;
