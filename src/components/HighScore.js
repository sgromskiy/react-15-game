import React, {Fragment} from 'react';
import ScoreList from "./ScoreList";
import Menu from "./Menu";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const HighScore = ({ scores }) => (
    <Fragment>
        <ScoreList scores={scores} />
        <Menu>
            <Link to="/">Home</Link>
            <Link to="/game">Play Again</Link>
        </Menu>
    </Fragment>
);


HighScore.propTypes = {
    scores: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired
    })).isRequired
}

export default HighScore;