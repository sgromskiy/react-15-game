import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameField from "./components/GameField";

class App extends Component {
     constructor(props) {
        super(props);
        this.state = {
            tiles: {
                tile1: {
                    value: 1,
                    home: [1, 1],
                    position: [1, 1]
                },
                tile2: {
                    value: 2,
                    home: [2, 1],
                    position: [2, 1]
                }
            },
            hole: {
                position: [2, 2]
            }
        };
    }

    move = (tile) => {
        const tileX = this.state.tiles[tile].position[0];
        const tileY = this.state.tiles[tile].position[1];
        const holeX = this.state.hole.position[0];
        const holeY = this.state.hole.position[1];

        if((Math.abs(tileX - holeX) > 1 || Math.abs(tileY - holeY) > 1) ||
            Math.abs((tileX + tileY) - (holeX + holeY)) === 2) return;

        let tiles = {...this.state.tiles};
        const newTile = {...this.state.tiles[tile], ...this.state.hole};
        tiles[tile] = newTile;
        const { position } = this.state.tiles[tile];
        const hole = { position };

        this.setState({ tiles, hole})
    }

    render() {
        return (
            <GameField move={this.move} tiles={this.state.tiles} />
        );
    }
}

export default App;
