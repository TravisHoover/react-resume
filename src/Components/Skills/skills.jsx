import React from 'react';
import './skills.css';

const Skills = (props) => {
	return <div className="skill-body">
		<span className="skill-title">{props.skills.title}</span>
		<div className="skill-list">
			{props.skills.skill_list.map(skill =>
				<li key={skill.toString()} className="skill-list-item">
				{skill}
				</li>)
			}
		</div>
	</div>
};

export default Skills;