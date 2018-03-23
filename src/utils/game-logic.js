
export function caclProgress(tiles)  {
    return Object.keys(tiles).filter(
        (key) => tiles[key].position === tiles[key].value
    ).length;
}

export function shuffleTiles(tiles)  {
    const arr = Object.keys(tiles).sort((a, b) => Math.random() - 0.5);
    arr.forEach((key, i) => {
        tiles[key] = { ...tiles[key], position: i + 1 };
    });
    return tiles;
}

export  function moveTile(tile, state) {
    const tilePos = state.tiles[tile].position;
    const holePos = state.hole.position;

    if (
        Math.abs(tilePos - holePos) === 4 ||
        (Math.abs(tilePos - holePos) === 1 && Math.ceil(tilePos / 4) === Math.ceil(holePos / 4))
    ) {
        let tiles = { ...state.tiles };
        const newTile = { ...state.tiles[tile], ...state.hole };

        tiles[tile] = newTile;
        const { position } = state.tiles[tile];
        const hole = { position };

        const score = state.score + 1;
        return { tiles, hole, score }
    }
}

export  function isWin(tiles) {
    return !Object.keys(tiles).filter(tile => tiles[tile].position !== tiles[tile].value).length;
}

export function initialState() {
    return {
        gameStarted: false,
        gameFinished: false,
        score: 0,
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