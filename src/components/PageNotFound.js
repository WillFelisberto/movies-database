import React, { useEffect, useState } from 'react';
import { get404Page } from '../api/services';
//TODO: Arrumar imagem do background
//TODO: Ajustar mensagem de 404
const NotFound = {
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'container',
	backgroundColor: '#cccccc',
	backgroundPosition: 'center',
};

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
			{!loading ? null : (
				<div
					style={{
						...NotFound,
						backgroundImage: `url("${background.image_original_url}")`,
					}}>
					<>errr</>
				</div>
			)}
		</>
	);
}
