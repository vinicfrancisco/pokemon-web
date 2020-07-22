import styled, { css } from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  align-items: center;
  background: ${colors.black};
  border-radius: 10px;
  border: 2px solid ${colors.black};
  color: ${colors.darkGray};
  display: flex;
  height: 38px;
  padding: 8px;
  max-width: 300px;
  transition: all 0.5s;
  width: 100%;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isFocused &&
    css`
      color: ${colors.primary};
      border-color: ${colors.primary};
    `}

  input {
    background: transparent;
    border: 0;
    color: ${colors.white};
    flex: 1;

    &::placeholder {
      color: ${colors.darkGray};
    }
  }
  svg {
    margin-right: 8px;
  }
`;
