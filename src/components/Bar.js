import React from 'react';
import Score from './Score';
import Progress from './Progress';

const Bar = (props) => (
	<div className="bar">
		<Progress progress={props.progress} size={15} />
		<Score score={props.score} />
	</div>
);

export default Bar;
