import styled from 'styled-components';

interface ColorProps {
    background: string;
}

export const Container = styled.div<ColorProps>`
  display: flex;
  min-width: 5.5rem;
  height: 100%;
  border-radius: 0.5rem;
  border: 1px solid black;
  background: ${props => props.background};
  justify-content: center;
  align-items: center;

  &:hover{
      cursor: pointer;

  }

  > svg {
      width: 2.5rem;
      height: 2.5rem;
      color: black;
  }
`;
