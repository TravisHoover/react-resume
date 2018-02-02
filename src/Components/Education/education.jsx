import React from 'react';
import './education.css';

const Education = (props) => {
	return <div className="education-background">
		<span className="education-title">{props.education.title}</span>
		<div style={{marginTop: '20px'}}>
			<li className="education-list">
				{props.education.degree}
			</li>
			<a className="education-list" href={props.education.url} style={{color: "black"}}>
				{props.education.university}
			</a>
			<li className="education-list">
				{props.education.graduation_date}
			</li>
		</div>
	</div>
};

export default Education;