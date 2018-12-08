import App from './components/app';

import { injectGlobal } from 'emotion';

injectGlobal`
html,
body {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  background: white;
  font-family: motiva-sans, sans-serif;
  font-weight: 400;
  color: black;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: motiva-sans, sans-serif;
  line-height: 135%;
  letter-spacing: 0.05em;
}

#app {
  height: 100%;
}

`;

export default App;
