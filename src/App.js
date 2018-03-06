import React, { Component } from 'react';
import './App.css';
import GameField from './components/GameField';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tiles: {
				tile1: {
					value: 1,
					home: [ 1, 1 ],
					position: [ 1, 1 ]
				},
				tile2: {
					value: 2,
					home: [ 2, 1 ],
					position: [ 2, 1 ]
				},
				tile3: {
					value: 3,
					home: [ 3, 1 ],
					position: [ 3, 1 ]
				},
				tile4: {
					value: 4,
					home: [ 4, 1 ],
					position: [ 4, 1 ]
				},
				tile5: {
					value: 5,
					home: [ 1, 2 ],
					position: [ 1, 2 ]
				},
				tile6: {
					value: 6,
					home: [ 2, 2 ],
					position: [ 2, 2 ]
				},
				tile7: {
					value: 7,
					home: [ 3, 2 ],
					position: [ 3, 2 ]
				},
				tile8: {
					value: 8,
					home: [ 4, 2 ],
					position: [ 4, 2 ]
				}
			},
			hole: {
				position: [ 3, 3 ]
			}
		};
	}

	move = (tile) => {
		const tileX = this.state.tiles[tile].position[0];
		const tileY = this.state.tiles[tile].position[1];
		const holeX = this.state.hole.position[0];
		const holeY = this.state.hole.position[1];

		if ((tileX === holeX && Math.abs(tileY - holeY) === 1) || (tileY === holeY && Math.abs(tileX - holeX) === 1)) {
			let tiles = { ...this.state.tiles };
			const newTile = { ...this.state.tiles[tile], ...this.state.hole };
			tiles[tile] = newTile;
			const { position } = this.state.tiles[tile];
			const hole = { position };

			this.setState({ tiles, hole });
		}
	};

	render() {
		return <GameField move={this.move} tiles={this.state.tiles} />;
	}
}

export default App;
