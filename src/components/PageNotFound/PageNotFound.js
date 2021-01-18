import React, { useEffect, useState } from 'react';
import { get404Page } from '../../api/services';
import { Container404, ContainerErro } from './styled';

export default function PageNotFound() {
	const [loading, setLoading] = useState(false);
	const [background, setBackground] = useState([]);

	useEffect(() => {
		const getDetails = async () => {
			const res = await get404Page('fail');
			setBackground(res);
			setLoading(true);
		};
		getDetails();
	}, [loading]);

	return (
		<>
			{loading ? (
				<div style={{ display: 'flex', flexFlow: 'column' }}>
					<ContainerErro>
						<h1>Oops! Page not found.</h1>
						<h1>:(</h1>
					</ContainerErro>
					<Container404 img={background.image_original_url} />
				</div>
			) : null}
		</>
	);
}
