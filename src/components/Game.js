import React, {Component, Fragment} from 'react';
import GameField from "./GameField";
import Bar from "./Bar";
import SaveScore from "./SaveScore";
import PropTypes from 'prop-types';


class Game extends Component {

    componentDidMount() {
       this.props.resetGame();
    }

    render() {
        const {move, gameState, tiles, score, scores, progress, startGame, saveScore} = this.props;

        const isBetter = () => {
            if (scores && scores.length) {
                return (Math.max(...scores.map(o => o.score)) > score) ? true : false;
            } else return true;
        }

        return (
            <Fragment>
                <GameField score={score} gameState={gameState} tiles={tiles} move={move} startGame={startGame}/>
                {gameState === 2 ? <Bar score={score} progress={progress}/> : null}
                {(isBetter() && gameState === 3) ? <SaveScore saveScore={saveScore}/> : null}
            </Fragment>
        )
    };
}

Game.propTypes = {
    score: PropTypes.number.isRequired,
    gameState: PropTypes.number.isRequired,
    tiles: PropTypes.arrayOf(PropTypes.shape({
        position: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired
    })).isRequired,
    move: PropTypes.func.isRequired,
    startGame: PropTypes.func.isRequired,
    resetGame: PropTypes.func.isRequired,
    progress : PropTypes.number.isRequired,
    saveScore: PropTypes.func.isRequired,
    scores: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired
    })).isRequired
}

export default Game;