import React from 'react';
import MovieList from './components/MovieList';
import Banner from './components/Banner';
// import Filter from './components/Filter';

//TODO: ajustar checkbox dos filtros(modal ou sidebar)
export default function App() {
 
	return (
			<>
				<Banner />
				<MovieList />
			</>
	);
}
