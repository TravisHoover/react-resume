import React from 'react';
import './skills.css';

const Skills = (props) => {
	return <div className="skill-body">
		<span className="skill-title">{props.skills.title}</span>
		<div style={{marginTop: '20px'}}>
			{props.skills.skill_list.map(skill =>
				<li key={skill.toString()} className="skill-list">
				{skill}
				</li>)
			}
		</div>
	</div>
};

export default Skills;