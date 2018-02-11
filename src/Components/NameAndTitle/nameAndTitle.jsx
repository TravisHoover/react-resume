import React from 'react';
import './nameAndTitle.css';
import { Card, CardTitle, CardText } from 'material-ui';

const NameAndTitle = (props) => {
	return (
		<Card style={{fontWeight: 800, fontSize: 20}}>
			<CardTitle
				actAsExpander={true}
				title={props.NameAndTitle.name}
				subtitle={props.NameAndTitle.title}/>
			<CardText expandable={true}>
				{props.NameAndTitle.summary}
			</CardText>
		</Card>
	)
};

export default NameAndTitle;