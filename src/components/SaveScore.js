import React, {Component, Fragment} from 'react';
import { Redirect } from 'react-router-dom';

class SaveScore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            saved: false
        };
    }

    handleChange = (event) => {
        this.setState({userName: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.saveScore(this.state.userName);
        this.setState({saved: true});
    }

    render() {
        return (
            <Fragment>
            <form className="add-score" onSubmit={this.handleSubmit}>
                <h3>AWESOME RESULT!</h3>
                <label htmlFor="user-name">Type you name:</label>
                <input id="user-name" type="text" onChange={this.handleChange} />
                <button className="btn" type="submit">Save it</button>
            </form>
                {this.state.saved ? <Redirect to="/high-scores" /> : null }
            </Fragment>

        )
    }
}

export default SaveScore;