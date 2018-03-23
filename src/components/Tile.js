import React, { Component } from 'react';

class Tile extends Component {
	render() {
		const px = (this.props.position - (Math.ceil(this.props.position / 4) - 1) * 4) * 50 - 50;
		const py = (Math.ceil(this.props.position / 4) - 1) * 50;
		const onPlace = this.props.position === this.props.value;
		const style = {
			transform: `translate(${px}px, ${py}px)`
		};
		return (
			<button
				className={'tile ' + (onPlace ? 'cool' : '')}
				style={style}
				onClick={() => this.props.move(this.props.index)}
			>
				{this.props.value}
			</button>
		);
	}
}

export default Tile;
