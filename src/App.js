import React, { Component } from 'react';
import './App.css';
import GameField from './components/GameField';
import Bar from "./components/Bar";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			gameStarted: false,
			steps: 0,
			progress: 0,
			tiles: {
				tile1: {
					value: 1,
					position: 1
				},
				tile2: {
					value: 2,
					position: 2
				},
				tile3: {
					value: 3,
					position: 3
				},
				tile4: {
					value: 4,
					position: 4
				},
				tile5: {
					value: 5,
					position: 5
				},
				tile6: {
					value: 6,
					position: 6
				},
				tile7: {
					value: 7,
					position: 7
				},
				tile8: {
					value: 8,
					position: 8
				},
				tile9: {
					value: 9,
					position: 9
				},
				tile10: {
					value: 10,
					position: 10
				},
				tile11: {
					value: 11,
					position: 11
				},
				tile12: {
					value: 12,
					position: 12
				},
				tile13: {
					value: 13,
					position: 13
				},
				tile14: {
					value: 14,
					position: 14
				},
				tile15: {
					value: 15,
					position: 15
				}
			},
			hole: {
				position: 16
			}
		};
	}

	move = (tile) => {
		const tilePos = this.state.tiles[tile].position;
		const holePos = this.state.hole.position;


		if (Math.abs(tilePos - holePos) === 4 || ((Math.abs(tilePos - holePos) === 1) && Math.ceil(tilePos/4) === Math.ceil(holePos/4))) {
			let tiles = { ...this.state.tiles };
			const newTile = { ...this.state.tiles[tile], ...this.state.hole };

			tiles[tile] = newTile;
			const { position } = this.state.tiles[tile];
			const hole = { position };

			const steps = this.state.steps + 1;
			this.setState({ tiles, hole, steps });
		}
	};

	startGame = () => {
		this.shuffle();
        this.setState({ progress: 2 });
		//this.calcProgress();
		//this.setState({ gameStarted: true });
	}

	calcProgress = () => {
		const progress = Object.keys(this.state.tiles).filter(key => this.state.tiles[key].position === this.state.tiles[key].value).length;
		this.setState({ progress });
	}

	shuffle = () => {
		let newTiles = { ...this.state.tiles };
		const arr = Object.keys(newTiles).sort((a,b) => Math.random() - 0.5);
		arr.forEach((key, i) => {
            newTiles[key].position = i + 1;
		})
	}

	render() {
		return(
			<div className="container">
				<GameField move={this.move} startGame={this.startGame} tiles={this.state.tiles} />
				<Bar gameStarted={this.state.gameStarted} steps={this.state.steps} progress={this.state.progress} />
			</div>
		)
	}
}

export default App;
