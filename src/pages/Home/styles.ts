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

    > form {
        display: flex;
        width: 100%;
        flex: 1;
        column-gap: 1rem;
        align-items: center;
        justify-content: stretch;

        > button {
            margin-top: 0;
            max-width: 20rem;
            height: 5rem;
        }
    }

    @media (max-width: 1100px) {
        max-width: 100%;
        width: 100%;
        padding: 1rem;

        > form {
            column-gap: 0.5rem;
            align-items: center;
            justify-content: stretch;

            > div {
                max-width: 70%;
                height: 100%;
            }

            > button {
                margin-top: 0;
                max-width: 30%;
            }
        }
    }
`;

export const Projects = styled.div`
    margin-top: 2rem;
    display: flex;
    flex: 1;
    column-gap: 1.5rem;
    row-gap: 1.5rem;
    width: 100%;

    @media (max-width: 1100px) {
        flex-direction: column;
    }
`;

export const ProjectContainer = styled.div`
    width: 33%;
    height: 10rem;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    -webkit-box-shadow: 0px 0px 10px -5px #000000; 
    box-shadow: 0px 0px 10px -5px #000000;

    transition: 0.2s;

    @media (max-width: 1100px) {
        width: 100%;
    }

    &:hover{
        cursor: pointer;
        transform: scale(1.01)
    }
`;

export const TitleProject = styled.h3`
    font-size: 2.5rem;
    color: var(--color-title);
`;

