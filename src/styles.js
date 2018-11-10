import { createGlobalStyle } from 'styled-components'

/*eslint-disable*/
export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
  }

  #root {
    flex: 1;
    display: flex;
  }

  .own-particles-wrapper {
    flex: 1;
  }
`
