import styled, { css } from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 62.5%;
  height: 60px;
  width: 100%;

  div {
    display: flex;
    flex-direction: row;
  }
`;

export const StyledInput = styled.input`
  background: transparent !important;
  border: none;
  border-bottom: 1px solid ${colors.softBlack};
  color: ${colors.white};
  height: 38px;
  font-size: 1rem;
  line-height: 23px;
  max-width: 100%;
  padding: 0 8px;
  transition: border-color 0.5s;
  width: 100%;

  &::placeholder {
    color: ${colors.gray};
  }

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    border-width: 2px;
  }

  ${(props) =>
    props.blackBorder &&
    css`
      border-color: ${colors.black};
    `}
`;

export const LabelContainer = styled.div`
  align-items: center;
  background: ${colors.primary};
  border: 0;
  display: flex;
  justify-content: center;
`;

export const Label = styled.label`
  color: ${colors.white};
  font-size: 1rem;
  font-weight: 400;
  line-height: 23px;
  margin: 0 4px;
`;
