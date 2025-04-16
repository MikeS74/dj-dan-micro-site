'use client'

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

body {
  /* font-family: Arial, Helvetica, sans-serif; */
  font-family: var(--font-inter);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: hsl(225 20% 20%);
  background: linear-gradient(
		-45deg,
		hsl(15 20% 20%),
		hsl(295 20% 20%),
		hsl(251 20% 20%),
		hsl(225 20% 20%),
		hsl(203 20% 20%)
	);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
  /* solid background fallback */
  background-color: hsl(225 20% 20%);
	height: 100vh;
  max-width: 100vw;
  overflow-x: hidden;
  }

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}


  * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
`;

export default GlobalStyles;