import React from 'react';

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

export default Score;
