import React from 'react';
import data from '../../data';

const Education = () => (
	<div>
			<ul>{data.Education.title}</ul>
				<li>{data.Education.degree}</li>
				<li>{data.Education.university}{data.Education.graduation_date}</li>
	</div>
);

export default Education;