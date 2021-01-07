import React from 'react';
import { Link } from 'react-router-dom';
import { ContainerHeader, SearchBar } from './styled';
import { useDispatch } from 'react-redux';
import allActions from '../../store/actions';

export default function Header() {
	const dispatch = useDispatch();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const searchTerm = e.target.search.value;
		dispatch(allActions.searchActions.definePage(searchTerm));
	};

	return (
		<ContainerHeader>
			<div>
				<Link to={'/'}>
					<strong>Movies DataBase</strong>
				</Link>
				<SearchBar>
					<form onSubmit={handleSubmit}>
						<span className="icon">
							<i className="fa fa-search"></i>
						</span>
						<input type="search" id="search" placeholder="Buscar" />
					</form>
				</SearchBar>
			</div>
		</ContainerHeader>
	);
}
