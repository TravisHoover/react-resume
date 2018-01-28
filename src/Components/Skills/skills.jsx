import React from 'react';
import './skills.css';

const Skills = (props) => {
	return <div className="skill-body">
		<ul className="skill-title">{props.skills.title}</ul>
		{props.skills.skill_list.map(skill =>
			<li key={skill.toString()} className="skill-list">
			{skill}
			</li>)
		}
	</div>
};

export default Skills;