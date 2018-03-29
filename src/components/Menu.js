import React, {Fragment} from 'react';
import Star from "./Star";
import PropTypes from 'prop-types';

const Menu = ({children}) => (
    <nav className="main-nav">
        <Star />
        { React.Children.map(children, child => (
            <Fragment>
                {child}
                <Star />
            </Fragment>
        ))}
    </nav>
);

Menu.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired
}

export default Menu;