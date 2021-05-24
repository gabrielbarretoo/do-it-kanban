import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

export const Header = styled.header`
    height: 10rem;
    background: var(--color-title);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1100px) {
        height: 8rem;
    }
`;

export const HeaderContent = styled.div`
    width: 1100px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > h1 {
        font-size: 4rem;
        color: var(--color-background)
    }

    > button {
        display: flex;
        padding: 2rem;
        border: 0;
        background: transparent;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        color: var(--color-background);

        svg {
            margin-right: 1rem;
        }
    }

    @media (max-width: 1100px) {
        max-width: 100%;
        width: 100%;
        padding: 0 1.5rem;

        > h1 {
            font-size: 2rem;
        }

        > button {
            display: flex;
            padding: 1rem;
            border: 0;
            background: transparent;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            color: var(--color-background);

            svg {
                margin-right: 1rem;
            }
        }
    }
`;

export const Content = styled.div`
    width: 1100px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding: 2rem 1rem;

    @media (max-width: 1100px) {
        max-width: 100%;
        width: 100%;
        padding: 1rem;
    }
`;

export const OptionsContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    column-gap: 1rem;

    @media (max-width: 756px) {
        column-gap: 0.5rem;
        justify-content: space-between;
    }
`;

export const Option = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    background: transparent;
    border-radius: 0.5rem;
    border: 1px solid var(--color-button);
    color: var(--color-button);

    > svg {
        margin-right: 0.5rem;
    }

    @media (max-width: 756px) {
        padding: 0.5rem;
    }
    
`;
export const KanbanContainer = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    margin-top: 2rem;
    justify-content: flex-start;
    align-items: flex-start;

    h3 {
        margin: 1rem 0;
    }
`;

