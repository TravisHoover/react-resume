import React from 'react';
import './nameAndTitle.css';

const NameAndTitle = (props) => {
	return <div className="background">
		<div className="name">
			<span>{props.NameAndTitle.name}</span>
		</div>
		<div className="title">
			<span>{props.NameAndTitle.title}</span>
		</div>
	</div>
};

export default NameAndTitle;