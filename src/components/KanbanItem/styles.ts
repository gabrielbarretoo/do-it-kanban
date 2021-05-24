import styled from 'styled-components';

interface TagsItemProps {
    background?: string;
  }

interface ContainerProps {
  isDragging: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  background: var(--color-background);
  padding: 1rem;
  border-radius: 0.5rem;
  opacity: ${props => props.isDragging ? '70%' : '100%'};
  margin-bottom: 1rem;
`;

export const Header = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    > div {
      > svg {
        color: var(--color-danger);
      }

      &:hover {
        cursor: pointer;
      }
    }

    
`;

export const TagsContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 1rem 0;

`;

export const TagItem = styled.div<TagsItemProps>`
  background: ${props => props.background || '#EAE4E9'};
  display: flex;
  padding: 0.75rem;
  border-radius: 0.5rem;
  font-size: 1.25rem;
  margin-right: 0.5rem;

  & + & {
    margin-right: 1rem;
  }

`;

export const DescriptionContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;
export const HeaderDescription = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    > p {
        font-size: 1.5rem;
        color: var(--color-placeholder);
    }

    &:hover {
        cursor: pointer;
    }
`;
export const Description = styled.p`
    font-size: 1.5rem;
    color: var(--color-placeholder);
`;
