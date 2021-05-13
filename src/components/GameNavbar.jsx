import React from 'react';
import {ReactComponent as StopHand} from '../assets/icons/stop-hand.svg'


const GameNavbar = () => {

    return (
        <div className="navContainer">
            <div className="mainNav">
            </div>
            <div className="circleNav">
                <StopButton/>
            </div>
        </div>  
    );
}

const StopButton = (props) => {

    return (
        <div className={"action-button stop "+((props.disable)?"disable":"")}>
            <StopHand/>   
        </div> 
    );
}


export default GameNavbar;