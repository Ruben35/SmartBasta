import {React, useEffect, useRef, useState} from 'react';
import useMediaQuery from '../utils/CustomHooks';
import  { useSwipeable } from 'react-swipeable';

const examplePlayers = [
    {
        "name": "Hassan",
        "puntuation": 680
    },
    {
        "name": "Rubén",
        "puntuation": 630
    },
    {
        "name": "Katia",
        "puntuation": 750
    },
    {
        "name": "Rafael",
        "puntuation": 350
    },
    {
        "name": "Carolina",
        "puntuation": 480
    },
    {
        "name": "Rafaelo",
        "puntuation": 540
    },
    {
        "name": "Altair",
        "puntuation": 460
    },
    {
        "name": "Luis",
        "puntuation": 420
    },

];


const PlayersSideBar = ({open,onClose, gameRound, tablePlayers}) => {
    const [openContainer, setOpenContainer] = useState(open);
    const players = tablePlayers?tablePlayers:examplePlayers;
    const round = gameRound?gameRound:1;
    const isFirstRun = useRef(true);
    const handlers = useSwipeable({
        onSwipedLeft: () => onClose(),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
      });
      

    let isWide= useMediaQuery("(min-width: 1025px)");

    const handleClick = (e)=>{
        e.preventDefault();
        onClose();
    }

    useEffect(()=>{
        if(isFirstRun.current){
            isFirstRun.current = false;
            return;
        }else{ 
            if(open){
                setOpenContainer(open);
            }else{
                setTimeout(() => {
                    setOpenContainer(open);
                }, 500)
            }
        }
    }, [open]);

    const bar=isWide?"playersBar":"playersBar "+(open?"open":"close");

    return (
        <div>
            <div className={"playersBarContainer "+(openContainer?"open":"close")} {...(isWide?"":handlers)} >
                <div className={bar}>
                    <div className="container">
                        <div className="header">
                            <span>Posiciones</span>
                            <span>Ronda {round}</span>
                        </div>
                        <div className="playersContainer">
                            {players.sort((a,b)=>a.puntuation<b.puntuation?1:-1) //Order by puntuation
                                    .map((player,index) =>(
                                    <div key={index}>
                                        <div className="player">
                                            <span>{index+1}. {player.name}</span>
                                            <span>{player.puntuation}pts</span>
                                        </div>
                                        <hr/>
                                    </div>
                                ))}
                            <div/>         
                        </div>
                    </div>
                </div>
                <div className={"playersBarDarkArea "+(open?"open":"close")} onClick={handleClick} {...(isWide?handlers:"")}>
                </div>
            </div>
        </div>
    );
}

export default PlayersSideBar;