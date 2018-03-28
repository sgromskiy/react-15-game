import React, { Component } from 'react';
import Home from './components/Home';
import Game from './components/Game';
import HighScore from './components/HighScore';
import * as game from './utils/game-logic';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = game.initialState();
	}

	move = (tile) => {
		this.setState( game.moveTile(tile, this.state), this.checkEnd );
	}

	startGame = () => {
		this.setShuffle();
	}

	checkEnd = () =>{
		if(game.isWin(this.state.tiles)) {
            this.setState({gameState: 3 })
		}
	}

	setShuffle = () => {
		const shuffleTiles = game.shuffleTiles({...this.state.tiles});
        const progress = game.caclProgress(shuffleTiles);
		this.setState({ tiles: shuffleTiles, progress, gameState: 2 });
	}

	saveScore = (userName) => {
		let scores = [...this.state.scores, {
            name: userName,
            score: this.state.score
		}];
        this.setState({ scores });
	}

	resetGame = () => {
        this.setState(game.reset());
	}


	render() {
		return (
			<Router>
			<div className="container">
				<Switch>
					<Route exact  path="/" component={Home} />
                	<Route path="/game" render={()=> <Game {...this.state} move={this.move} resetGame={this.resetGame} saveScore={this.saveScore} startGame={this.startGame} /> } />
                	<Route path="/high-scores" render={()=> <HighScore score={this.state.score} scores={this.state.scores} /> } />
				</Switch>
			</div>
			</Router>
		);
	}
}

export default App;
