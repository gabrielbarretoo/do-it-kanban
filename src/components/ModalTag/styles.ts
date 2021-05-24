import styled from 'styled-components';


interface TagsItemProps {
  background?: string;
}
export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 2rem;
  width: 520px;
  min-height: 300px;
  justify-content: flex-start;
  color: var(--color-title);
  font-size: 1.75rem;

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  section {
    margin: 1rem 0 0.5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: center;
    width: 100%;
    row-gap: 1rem;
    max-height: 600px;
    
    > form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 1;
      width: 100%;
      row-gap: 1rem;
    }
  }
  @media (max-width: 520px) {
    width: 100%;
  }
`;


export const FormContainer = styled.div`
  display: flex;
  width: 100%;
  column-gap: 1rem;
  height: 5.5rem;
  justify-content: stretch;
  align-items: center;
  flex-direction: row;

  > div + div {
    margin-top: 0;
  }

  > button {
    margin-top: 0;
    height: 100%;
    max-width: 10rem;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 3.5rem;
  img {
    margin-right: 0.5rem;
  }
`;
export const Close = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 1rem 0;
  max-height: 500px;
  overflow: auto;

`;

export const TagItem = styled.div<TagsItemProps>`
  background: ${props => props.background || '#EAE4E9'};
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid var(--color-title);

  & + & {
    margin-top: 1rem;
  }

  &:hover {
    cursor: pointer;
  }

`;
