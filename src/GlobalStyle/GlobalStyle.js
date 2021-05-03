import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Work Sans', sans-serif;
        line-height: 1rem;
        font-size: 0.75rem;
        background-color: darkgrey;
    }
`;

export default GlobalStyle;