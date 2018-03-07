import React from 'react';

const Progress = (props) => {
    const currentProgress = props.progress / props.size * 100
    return (
        <span className="progress-bar">
            <span style={{width: `${currentProgress}%`}} className="fill"></span>
        </span>
    )
}

export default Progress;