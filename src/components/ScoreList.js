import React from 'react';
import PropTypes from 'prop-types';

const ScoreList = ({scores}) => {
    const list = (scores && scores.length ) ?
        (
            <ol>
                {scores.map((item, index) => (
                    <li key={index}>
                        <div>
                            <span className="name">{item.name}</span>
                            <span className="score">{item.score}</span>
                        </div>
                    </li>
                    ))
                }
            </ol>
        ) : ( <p>No data</p> );

    return (
        <div className="score-list">
            <h2>High Scores</h2>
            { list }
        </div>
    )
};

ScoreList.propTypes = {
    scores: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired
    })).isRequired
}

export default ScoreList;