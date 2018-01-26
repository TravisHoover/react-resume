import React from 'react';
import data from '../../data';
import './education.css';

const Education = () => (
	<div className="education-background">
			<ul className="education-title">{data.Education.title}</ul>
				<li className="education-list">
					{data.Education.degree}
				</li>
				<li className="education-list">
					{data.Education.university}
				</li>
				<li className="education-list">
					{data.Education.graduation_date}
				</li>
	</div>
);

export default Education;