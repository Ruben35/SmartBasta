import React from 'react';
import {ReactComponent as StopHand} from '../assets/icons/stop-hand.svg'


const GameNavbar = (props) => {

    let mainButton;
    switch(props.type){
        case "stop":
            mainButton=<StopButton disable={props.disable}/>;
            break;
        case "start":
            mainButton=<StartButton disable={props.disable}/>;
            break;
        case "ok":
            mainButton=<OkButton disable={props.disable}/>;
            break;
        case "end":
            mainButton=<EndButton disable={props.disable}/>;
            break;
        default:
            mainButton=<StopButton disable={props.disable}/>;
            break;
    }

    return (
        <div className="navContainer">
            <div className="mainNav">
            </div>
            <div className="circleNav">
                {mainButton}
            </div>
        </div>  
    );
}

const StopButton = (props) => {

    const handleClick= (e) =>{
        e.preventDefault();
        console.log("Something was clicked");
    };

    return (
        <div className={"action-button stop "+((props.disable)?"disable":"")} onClick={handleClick}>
            <StopHand/>   
        </div> 
    );
}

const StartButton = (props) => {

    const handleClick= (e) =>{
        e.preventDefault();
        console.log("Something was clicked");
    };

    return (
        <div className={"action-button start "+((props.disable)?"disable":"")} onClick={handleClick}>
            START
        </div> 
    );
}

const OkButton = (props) => {

    const handleClick= (e) =>{
        e.preventDefault();
        console.log("Something was clicked");
    };

    return (
        <div className={"action-button ok "+((props.disable)?"disable":"")} onClick={handleClick}>
            OK!
        </div> 
    );
}

const EndButton = (props) => {

    const handleClick= (e) =>{
        e.preventDefault();
        console.log("Something was clicked");
    };

    return (
        <div className={"action-button end "+((props.disable)?"disable":"")} onClick={handleClick}>
            END
        </div> 
    );
}


export default GameNavbar;