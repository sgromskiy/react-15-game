import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import Star from "./Star";
import logo from '../img/15-logo.svg';

const Home = () => (
    <Fragment>
        <div className="logo">
            <img src={logo} alt="15 Puzzle Game"/>
        </div>
        <nav className="main-nav">
            <Star />
                <Link className="button" to='/game'>Play</Link>
            <Star />
                <Link className="button" to='/high-scores'>High Scores</Link>
            <Star />
        </nav>
    </Fragment>
);
export default Home;