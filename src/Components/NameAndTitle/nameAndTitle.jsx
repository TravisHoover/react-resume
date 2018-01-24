import React from 'react';
import data from '../../data';

const NameAndTitle = () => (
	<div>
		<div>
		<span>{data.NameAndTitle.name}</span>
		</div>
		<div>
		<span>{data.NameAndTitle.title}</span>
		</div>
	</div>
);

export default NameAndTitle;