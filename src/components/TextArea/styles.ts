import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}
export const Container = styled.div<ContainerProps>`
  background: var(--color-background);
  border-radius: 1rem;
  border: 2px solid var(--color-title);
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
  textarea {
    flex: 1;
    background: transparent;
    border: 0;
    color: var(--color-title);
    min-height: 15rem;

    &::placeholder {
      color: var(--color-placeholder);
    }
  }
  svg {
    margin-right: 1rem;
  }
`;

export const AlertError = styled(Tooltip)`
  height: 1.5rem;
  margin-left: 1rem;

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
