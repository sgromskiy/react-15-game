import React, { Component } from 'react';
import Tile from "./Tile";

class GameField extends Component {
    render() {
        const buttonStart = !this.props.isGameStarted ? (
            <div className="overlay">
                <button onClick={this.props.startGame}>Start game</button>
            </div>
        ) : (null);

        return (
            <div className="game-field-wrap">
                <div className="game-field">
                    {Object.keys(this.props.tiles).map(key =>
                        <Tile move={this.props.move} index={key} key={key} {...this.props.tiles[key]} />)}
                </div>
                {buttonStart}
            </div>
        );
    }
}

export default GameField;
