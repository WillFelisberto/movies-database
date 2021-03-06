import React from 'react';
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';

export default function Filter({ nome, value, setFilterValue }) {
	return (
		<div>
			<label>
				<Checkbox
					// defaultChecked={checked.check}
					value={value}
					onClick={setFilterValue}
				/>
				{nome}
			</label>
		</div>
	);
}
