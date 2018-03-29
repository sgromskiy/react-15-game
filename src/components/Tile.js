import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Tile = ({move, position, value, index}) => {

	const px = (position - (Math.ceil(position / 4) - 1) * 4) * 50 - 50;
	const py = (Math.ceil(position / 4) - 1) * 50;
	const onPlace = position === value;
	const style = {
		transform: `translate(${px}px, ${py}px)`
	};

	return (
		<button
			className={'tile ' + (onPlace ? 'cool' : '')}
			style={style}
			onClick={() => move(index)}
		>
			{value}
		</button>
	);
}

Tile.propTypes = {
	position: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
	move: PropTypes.func.isRequired,
    index: PropTypes.string.isRequired,
}

export default Tile;
