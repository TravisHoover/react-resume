import React from 'react';
import data from '../../data';

const Skills = () => (
	<div>
		<ul>{data.Skills.title}</ul>
		{data.Skills.skills.map(skill => <li>{skill}</li>)}
	</div>
);

export default Skills;