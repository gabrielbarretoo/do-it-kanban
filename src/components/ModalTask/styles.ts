import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 2rem;
  width: 520px;
  min-height: 500px;
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

      > div + div {
        margin-top: 1rem;
      }
    }
  }
  @media (min-width: 1100px) {
    width: 768px;
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
