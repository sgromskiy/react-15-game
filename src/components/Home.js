import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import Menu from "./Menu";

import logo from '../img/15-logo.svg';

const Home = () => (
    <Fragment>
        <div className="logo">
            <img src={logo} alt="15 Puzzle Game"/>
        </div>

        <Menu>
            <Link className="button" to='/game'>Play</Link>
            <Link className="button" to='/high-scores'>High Scores</Link>
        </Menu>
    </Fragment>
);

export default Home;