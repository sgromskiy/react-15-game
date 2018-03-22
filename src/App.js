import React, { Component } from 'react';
import './App.css';
import GameField from './components/GameField';
import Bar from './components/Bar';
import * as game from './utils/game-logic';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = game.initialState();
	}

	move = (tile) => {
		this.setState( game.moveTile(tile, this.state), this.setProgress );
	};

	startGame = () => {
		this.setShuffle();
		this.setState({ gameStarted: true });
	};

	setProgress = () => {
		this.setState({ progress: game.caclProgress(this.state.tiles) });
	};

	setShuffle = () => {
		this.setState({ tiles: game.shuffleTiles({...this.state.tiles}) }, this.setProgress);
	};

	render() {
		return (
			<div className="container">
				<GameField  isGameStarted={this.state.gameStarted} move={this.move} startGame={this.startGame} tiles={this.state.tiles} />
				<Bar isGameStarted={this.state.gameStarted} score={this.state.score} progress={this.state.progress} />
			</div>
		);
	}
}

export default App;
