import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ContainerHeader, SearchBar } from './styled';
import { useDispatch } from 'react-redux';
import allActions from '../../store/actions';
import { useSelector } from 'react-redux';

export default function Header() {
	const dispatch = useDispatch();
	let history = useHistory();
	const searchWord = useSelector((state) => state.search.dados);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const searchTerm = e.target.search.value;
		dispatch(allActions.searchActions.defineSearch(searchTerm));
		history.push(`/busca/q?query=${searchTerm}`);
	};

	return (
		<ContainerHeader>
			<div>
				<Link to={'/'}>
					<strong>Movies DataBase</strong>
				</Link>
				<SearchBar>
					<form onSubmit={handleSubmit}>
						<span className='icon'>
							<i className='fa fa-search'></i>
						</span>
						<input
							type='search'
							id='search'
							placeholder={searchWord ? searchWord : 'Buscar'}
						/>
					</form>
				</SearchBar>
			</div>
		</ContainerHeader>
	);
}
