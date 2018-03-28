import React, {Component, Fragment} from 'react';
import GameField from "./GameField";
import Bar from "./Bar";
import SaveScore from "./SaveScore";



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

export default Game;