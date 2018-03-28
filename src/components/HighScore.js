import React, {Fragment} from 'react';
import ScoreList from "./ScoreList";
import Star from "./Star";
import { Link } from 'react-router-dom';


const HighScore = ({ saveScore, scores, score}) => {


    return (
        <Fragment>
            <ScoreList scores={scores} />
            <nav className="main-nav">
                <Star/>
                <Link to="/">Home</Link>
                <Star/>
                <Link to="/game">Play Again</Link>
                <Star/>
            </nav>
        </Fragment>
    );
}

export default HighScore;