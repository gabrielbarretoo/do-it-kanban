import styled from "styled-components";

interface ItemProps {
  background?: string;
}

export const Container = styled.div`
  width: 100%;
  height: 3.2rem;
  padding: 0.75rem;
  color: var(--color-text);
  display: flex;
  align-items: flex-start;
  justify-content: start;
  column-gap: 1rem;



  & + div {
    margin-left: 0.5rem;
  }

  
`;

export const Item = styled.label<ItemProps>`

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  background: ${props => props.background || '#EAE4E9'};

  > input {
    flex: 1;
    background: transparent;
    border: 0;
    color: var(--color-text);
    margin-right: 0.75rem;
  }
`;