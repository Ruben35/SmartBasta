import React from 'react';
import {ReactComponent as StopHand} from '../assets/icons/stop-hand.svg'


const GameNavbar = () => {

    return (
        <div className="navContainer">
            <div className="mainNav">
            </div>
            <div className="circleNav">
                <div className="action-button stop">
                    <StopHand/>   
                </div> 
            </div>
        </div>  
    );
}

export default GameNavbar;