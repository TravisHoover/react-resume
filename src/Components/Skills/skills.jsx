import React from 'react';
import data from '../../data';
import './skills.css';

const Skills = () => (
	<div className="skill-body">
		<ul className="skill-title">{data.Skills.title}</ul>
		{data.Skills.skills.map(skill => <li className="list">{skill}</li>)}
	</div>
);

export default Skills;