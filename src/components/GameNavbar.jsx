import React, { useState } from 'react';
import {ReactComponent as StopHand} from '../assets/icons/stop-hand.svg'
import {ReactComponent as SpeakerOn} from '../assets/icons/speaker-on.svg' 
import {ReactComponent as SpeakerOff} from '../assets/icons/speaker-off.svg' 
import {ReactComponent as MicrophoneOn} from '../assets/icons/microphone-on.svg'
import {ReactComponent as MicrophoneOff} from '../assets/icons/microphone-off.svg'
import {ReactComponent as Group} from '../assets/icons/group.svg'

const GameNavbar = ({type,disable, onClickPlayers}) => {

    let mainButton;
    switch(type){
        case "stop":
            mainButton=<StopButton disable={disable}/>;
            break;
        case "start":
            mainButton=<StartButton disable={disable}/>;
            break;
        case "ok":
            mainButton=<OkButton disable={disable}/>;
            break;
        case "end":
            mainButton=<EndButton disable={disable}/>;
            break;
        default:
            mainButton=<StopButton disable={disable}/>;
            break;
    }

    const handleCallbackPlayers = (value) =>{
        onClickPlayers(value);
    }


    return (
        <div className="navContainer">
            <div className="mainNav">
                <PlayersButton onClickPlayers={handleCallbackPlayers} />
                <MicrophoneButton/>
                <SpeakerButton/>
            </div>
            <div className="circleNav">
                {mainButton}
            </div>
        </div>  
    );
}

/*
 * ACTION BUTTONS *  
*/
const StopButton = ({disable}) => {

    const handleClick= (e) =>{
        e.preventDefault();
        console.log("Something was clicked");
    };

    return (
        <div className={"action-button stop "+((disable)?"disable":"")} onClick={handleClick}>
            <StopHand/>   
        </div> 
    );
}

const StartButton = ({disable}) => {

    const handleClick= (e) =>{
        e.preventDefault();
        console.log("Something was clicked");
    };

    return (
        <div className={"action-button start "+((disable)?"disable":"")} onClick={handleClick}>
            START
        </div> 
    );
}

const OkButton = ({disable}) => {

    const handleClick= (e) =>{
        e.preventDefault();
        console.log("Something was clicked");
    };

    return (
        <div className={"action-button ok "+((disable)?"disable":"")} onClick={handleClick}>
            OK!
        </div> 
    );
}

const EndButton = ({disable}) => {

    const handleClick= (e) =>{
        e.preventDefault();
        console.log("Something was clicked");
    };

    return (
        <div className={"action-button end "+((disable)?"disable":"")} onClick={handleClick}>
            END
        </div> 
    );
}

/*
 * NORMAL NAV BUTTONS *  
*/

const PlayersButton = ({onClickPlayers}) =>{
    const handleClick= (e) =>{
        e.preventDefault();
        onClickPlayers();
    };
    
    return (
        <div className="groupButtonContainer">
            <div className="navButton group" onClick={handleClick} >
                <Group/>
            </div>
        </div>
    );
}

const MicrophoneButton = () =>{
    const [microphoneOn, setMicrophoneOn] = useState(true);

    const handleClick= (e) =>{
        e.preventDefault();
        setMicrophoneOn(!microphoneOn);
    };

    return (
        <div className="navButton microphone" onClick={handleClick}>
            {microphoneOn?<MicrophoneOn/>:<MicrophoneOff/>}
        </div>
    );
}

const SpeakerButton = () =>{

    const [speakerOn, setSpeakerOn] = useState(true);

    const handleClick= (e) =>{
        e.preventDefault();
        setSpeakerOn(!speakerOn);
    };

    return (
        <div className="navButton speaker" onClick={handleClick}>
            {speakerOn?<SpeakerOn/>:<SpeakerOff/>}
        </div>
    );
}

export default GameNavbar;