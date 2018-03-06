import React, { Component } from 'react';

class Tile extends Component {
    render() {
        const px = this.props.position[0]*50 - 50;
        const py = this.props.position[1]*50 - 50;
        const style = {
            transform: `translate(${px}px, ${py}px)`
        }
        return (
            <button className="tile" style={style} onClick={()=>this.props.move(this.props.index)}>
                {this.props.value}
            </button>
        );
    }
}

export default Tile;