import React from 'react';
import Tile from "./Tile";

const GameField = ({gameState, startGame, score, tiles, move}) => {

    const buttonStart = gameState === 1 ? (
        <div className="overlay">
            <button className="btn" onClick={startGame}>Start game</button>
        </div>
    ) : (null);

    const buttonStartAgain = gameState === 3 ? (
        <div className="overlay">
            <h3>You score: {score}</h3>
            <button className="btn" onClick={startGame}>Play Again?</button>
        </div>
    ) : (null);

    return (
        <div className="game-field-wrap">
            <div className="game-field">
                {Object.keys(tiles).map(key =>
                    <Tile move={move} index={key} key={key} {...tiles[key]} />)}
            </div>
            {buttonStart}
            {buttonStartAgain}
        </div>
    );

}

export default GameField;
