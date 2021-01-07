import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';
import MovieList from './components/MovieList';
import Banner from './components/Banner';
// import Filter from './components/Filter';

//TODO: ajustar checkbox dos filtros(modal ou sidebar)
export default function App() {
	const theme = createMuiTheme({
		palette: {
			type: 'dark',
		},
	});
	return (
		<ThemeProvider theme={theme}>
			<>
				<Banner />

				<MovieList />
			</>
		</ThemeProvider>
	);
}
