import React from 'react';
import PropTypes from 'prop-types';


const Score = ({ score }) => {
	const red = score > 255 ? 255 : score;
	const style = { color: `rgb(${red}, 0, 0)` };
	return (
		<span className="score-wrap">
			<span className="label">Score:</span>
			<span className="score" style={style}>
				{score}
			</span>
		</span>
	);
};

Score.propTypes = {
	score: PropTypes.number.isRequired
}

export default Score;
