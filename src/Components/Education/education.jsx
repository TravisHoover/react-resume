import React from 'react';
import './education.css';

const Education = (props) => {
	return <div className="education-background">
		<ul className="education-title">{props.education.title}</ul>
		<li className="education-list">
			{props.education.degree}
		</li>
		<li className="education-list">
			{props.education.university}
		</li>
		<li className="education-list">
			{props.education.graduation_date}
		</li>
	</div>
};

export default Education;