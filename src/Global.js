import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

:root {
  --ah-color-light: #e9e9ec;
  --ah-color-dark: #070612;
  --ah-color-accent: #87e7ad;
  --ah-color-highlight: #a0fac5;
  --ah-color-main: #02152B;
  --ah-color-background: #070612;
  
  font-family: 'Mulish', sans-serif;
  font-family: 'Philosopher', sans-serif;
  font-family: 'Taviraj', serif;
  font-family: Arial, Helvetica, sans-serif;
  font-synthesis: none;
  font-weight: 400;
  line-height: 1.5;

  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
}

html,
body {
  box-sizing: border-box;
  max-width: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}

*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style-type: none;
}

body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

ul[role='list'],
ol[role='list'] {
  list-style: none;
}

html:focus-within {
  scroll-behavior: smooth;
}

a:not([class]) {
  text-decoration-skip-ink: auto;
}

img,
picture {
  max-width: 100%;
  display: block;
}

input,
button,
textarea,
select {
  font: inherit;
}

@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

body {
  /* background-color: var(--ah-color-main);
  background-color: rgba(7, 6, 18, 0.95); */
  background-color: var(--ah-color-background);
  color: var(--ah-color-light);
}

#root {
  width: 100%;
  height: auto;
  min-width: 315px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
`;

export default GlobalStyles;
