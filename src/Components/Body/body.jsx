import React from 'react';
import Education from '../Education/education';
import Skills from "../Skills/skills";
import data from '../../data';

const Body = () => (
	<div>
		<Education education={data.Education}/>
		<Skills skills={data.Skills}/>
	</div>
);

export default Body;