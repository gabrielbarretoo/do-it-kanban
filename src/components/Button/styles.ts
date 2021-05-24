import styled from 'styled-components';

export const Container = styled.button`
  min-height: 4rem;
  max-height: 6rem;
  border-radius: 0.1rem;
  border: 0;
  padding: 0 1rem;
  width: 100%;
  font-weight: 500;
  margin-top: 1rem;
  transition: background-color 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--color-button);
    color: var(--color-button-text);
    &:hover {
      background: var(--color-button-shade);
    }
  svg {
    margin: auto 0.5rem;
  }

`;
