import React, { Component } from 'react';
import Tile from "./Tile";

class GameField extends Component {
    render() {
        return (
            <div className="game-field-wrap">
                <div className="game-field">
                    {Object.keys(this.props.tiles).map(key =>
                        <Tile move={this.props.move} index={key} key={key} {...this.props.tiles[key]} />)}
                </div>
                <button onClick={this.props.startGame}>Start game</button>
            </div>
        );
    }
}

export default GameField;
