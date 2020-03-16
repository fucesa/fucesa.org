import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: system;
    font-style: normal;
    font-weight: 300;
    src: local(".SFNSText-Light"), local(".HelveticaNeueDeskInterface-Light"), local(".LucidaGrandeUI"), local("Ubuntu Light"), local("Segoe UI Light"), local("Roboto-Light"), local("DroidSans"), local("Tahoma");
  }

  html, body, div, p, ul, li, h1, h2, h3, h4, h5, h6, * {
    border: none;
    margin: 0;
    padding: 0;
  }

  html {
    text-size-adjust: 100%;
    quotes: "“" "”";
  }

  body {
    font-family: "system";
    font-size: 17px;
    letter-spacing: -.022em;
    background-color: #fff;
    color: #1d1d1f;
    font-style: normal;
  }

  body, input, textarea, select, button {
    font-synthesis: none;
    -moz-font-feature-settings: 'kern';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    direction: ltr;
    text-align: left;
  }
`

export { GlobalStyle }
