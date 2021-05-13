import React, { useState } from 'react';
import {ReactComponent as StopHand} from '../assets/icons/stop-hand.svg'
import {ReactComponent as SpeakerOn} from '../assets/icons/speaker-on.svg' 
import {ReactComponent as SpeakerOff} from '../assets/icons/speaker-off.svg' 
import {ReactComponent as MicrophoneOn} from '../assets/icons/microphone-on.svg'
import {ReactComponent as MicrophoneOff} from '../assets/icons/microphone-off.svg'
import {ReactComponent as Group} from '../assets/icons/group.svg'

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
                <PlayersButton/>
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

/*
 * NORMAL NAV BUTTONS *  
*/

const PlayersButton = ({onClickPlayers}) =>{
    const [openPlayers,setOpenPlayers] = useState(false);

    // const handleClick= (e) =>{
    //     e.preventDefault();
    //     setOpenPlayers(!openPlayers);
    //     onClickPlayers(!openPlayers);
    // };
    //TODO: Check this https://medium.com/@jasminegump/passing-data-between-a-parent-and-child-in-react-deea2ec8e654
    
    return (
        <div className="groupButtonContainer">
            <div className="navButton group" >
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