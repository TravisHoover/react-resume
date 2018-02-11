import React from 'react';
import './education.css';
import { Card, CardTitle } from 'material-ui';

const Education = (props) => {
	return (
		<Card className="education-background">
			<CardTitle
				style={{fontWeight: 800}}
				title={props.education.title}
				subtitle={props.education.degree}
			/>
		</Card>
	)
};

export default Education;