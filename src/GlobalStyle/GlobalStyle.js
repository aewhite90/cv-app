import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Work Sans', sans-serif;
        line-height: 1.25rem;
        font-size: 1rem;
        background-color: darkgrey;
    }
`;

export default GlobalStyle;