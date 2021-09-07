import { createGlobalStyle } from 'styled-components/macro'

const GlobalStyle = createGlobalStyle`
:root {
    --color-basis: white;
    --color-text: black;
    --color-highlight: hotpink;


}
* {
  box-sizing: border-box;
}

body {
    color: var(--color-text);
    background-color: var(--color-basis);
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 112.5%;
    line-height: 1.4;
   
  }
 
  h1 {
    font-size: 35px;
  }
  h2 {
    font-size: 20px;
  }
`
export default GlobalStyle