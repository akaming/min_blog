import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    @font-face {
      font-family: 'S-CoreDream-3Light';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff') format('woff');
      font-weight: normal;
      font-style: normal;
    };

    html,body{
        height: 100%;
        padding: 0;
        margin: 0;
        font-family: 'S-CoreDream-3Light';
        font-size: 62.5%;

        // @media screen and (max-width: 767px) {
        //   font-size: 1.2rem;
        // }
    };

    button {
      font-family: 'S-CoreDream-3Light';
    }
    
    body > div {
        height: 100%;
    }

    a {
      color: inherit;
      text-decoration: none;
    }
    
    * {
      box-sizing: border-box;
    }

`;

export default GlobalStyle;
