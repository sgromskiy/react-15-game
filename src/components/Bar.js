import React from 'react';
import Score from './Score';
import Progress from './Progress';
import PropTypes from 'prop-types';

const Bar = (props) => (
	<div className="bar">
		<Progress progress={props.progress} size={15} />
		<Score score={props.score} />
	</div>
);

Bar.propTypes = {
	progress: PropTypes.number.isRequired,
	score: PropTypes.number.isRequired
}

export default Bar;
