import { shade, lighten } from 'polished';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  :root{
    --color-background: #f9f9f9 ;
    --color-primary: #268aec;
    --color-secondary: #00ba8b;
    --color-danger: #ff484e;
    --color-primary-shade: ${shade(0.2, '#268aec')};
    --color-secondary-shade: ${shade(0.2, '#00ba8b')};
    --color-danger-shade: ${shade(0.2, '#ff484e')};
    --color-title: #22304C;
    --color-title-shade: ${shade(0.2, '#22304C')};
    --color-button: #2560E5;
    --color-button-shade: ${shade(0.2, '#2560E5')};
    --color-placeholder: #4d4d4d;
    --color-button-text: #FFFFFF;

    font-size: 85%;

  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: var(--color-background);
    color: var(--color-text-in-background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Roboto', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  @media( min-width: 700px){
      :root {
          font-size: 62.5%;
      }
  }


`;
