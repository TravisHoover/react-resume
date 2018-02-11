import React from 'react';
import './skills.css';
import { Card, CardTitle,CardText } from 'material-ui';

const Skills = (props) => {
	return (
		<Card>
			<CardTitle
				style={{fontWeight: 800}}
			  title={props.skills.title}
			/>
			<CardText>
				{props.skills.skill_list.map(skill =>
					<li key={skill.toString()}>
						{skill}
					</li>)
				}
			</CardText>
		</Card>
	)
};

export default Skills;