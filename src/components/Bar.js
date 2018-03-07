import React from 'react';
import Steps from "./Steps";
import Progress from "./Progress";

const Bar = (props) => {
    if(props.gameStarted){
        return (
            <div className="bar">
                <Progress progress={props.progress} size={15} />
                <Steps steps={props.steps} />
            </div>
        )
    } else return null;
}

export default Bar;