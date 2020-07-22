import { FiCheck } from 'react-icons/fi';

import styled, { css } from 'styled-components';

import colors from '~/styles/colors';

export const Options = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-top: 8px;
  margin-bottom: 16px;

  > button {
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const Option = styled.button.attrs({
  type: 'button',
})`
  align-items: center;
  background: ${colors.softBlack};
  border-radius: 6px;
  border: 0;
  color: ${colors.white};
  display: flex;
  flex-direction: row;
  font-size: 14px;
  font-weight: 600;
  height: 50px;
  justify-content: center;
  margin-right: 20px;
  padding: 0 20px;
  position: relative;
  transition: all 0.3s;

  > svg {
    margin-right: 10px;
  }

  > span {
    align-items: center;
    background: ${colors.primary};
    border-radius: 10px;
    color: ${colors.white};
    display: flex;
    height: 20px;
    font-size: 10px;
    justify-content: center;
    opacity: 0;
    position: absolute;
    right: -10px;
    top: -10px;
    transition: all 0.1s;
    width: 20px;
  }

  ${(props) =>
    props.active &&
    css`
      box-shadow: 0 0 0 2px ${colors.primary};

      > span {
        opacity: 1;
      }
    `}
`;

export const StyledIcon = styled(FiCheck)``;
