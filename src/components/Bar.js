import React from 'react';
import Score from './Score';
import Progress from './Progress';

const Bar = (props) => {
	if (props.isGameStarted) {
		return (
			<div className="bar">
				<Progress progress={props.progress} size={15} />
				<Score score={props.score} />
			</div>
		);
	} else return null;
};

export default Bar;
