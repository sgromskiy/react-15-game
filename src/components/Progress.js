import React from 'react';
import PropTypes from 'prop-types';

const Progress = (props) => {
	const currentProgress = props.progress / props.size * 100;
	return (
		<span className="progress-bar-wrap">
			<span className="label">Progress</span>
			<span className="progress-bar">
				<span style={{ width: `${currentProgress}%` }} className="fill" />
			</span>
		</span>
	);
};

Progress.propTypes = {
	progress: PropTypes.number.isRequired,
	size: PropTypes.number.isRequired
};

export default Progress;

