import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  	body {
		background-color: #666;
		color: white;
		background-image: linear-gradient(to right, #18232c, #354c58);
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
			'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
			'Helvetica Neue', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
 	}
	a { 
		color: inherit; 
		text-decoration: none;
	} 
`;

export default GlobalStyle;
