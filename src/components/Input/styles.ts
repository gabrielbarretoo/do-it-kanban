import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: var(--color-background);
  border-radius: 0.25rem;
  border: 1px solid var(--color-title);
  padding: 1.5rem;
  width: 100%;
  color: var(--color-title);
  display: flex;
  align-items: center;

  & + div {
    margin-top: 0.75rem;
  }

  ${props =>
    props.isFocused &&
    css`
      color: var(--color-title-shade);
      border-color: var(--color-title-shade);
    `}

  ${props =>
    props.isFilled &&
    css`
      color: var(--color-title-shade);
    `}

    ${props =>
    props.isErrored &&
    css`
      border-color: var(--color-danger);
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: var(--color-title);

    &::placeholder {
      color: var(--color-placeholder);
    }
  }

  svg {
    margin-right: 1.5rem;
  }
`;

export const AlertError = styled(Tooltip)`
  height: 2rem;
  margin-left: 1.5rem;

  svg {
    margin: 0;
  }

  span {
    background: var(--color-danger);
    color: #fff;

    &::before {
      border-color: var(--color-danger) transparent;
    }
  }
`;
