import React from 'react';
import data from '../../data';
import './nameAndTitle.css';

const NameAndTitle = () => (
	<div className="background">
		<div className="name">
		<span>{data.NameAndTitle.name}</span>
		</div>
		<div className="title">
		<span>{data.NameAndTitle.title}</span>
		</div>
	</div>
);

export default NameAndTitle;