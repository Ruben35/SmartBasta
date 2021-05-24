import React ,{ useState } from 'react';
import ActualPuntuation from '../components/ActualPuntuation';
import GameNavbar from '../components/GameNavbar'
import PlayersSideBar from '../components/PlayersSideBar'

const MainBastaGame = () => {
    const [playersBarOpen, setPlayersBarOpen] = useState(false);
    const handleOnClickPlayers= () => {
        setPlayersBarOpen(!playersBarOpen);
    }

    return (
        <>
        <section className="gameContainer">
            <PlayersSideBar open={playersBarOpen} onClose={handleOnClickPlayers}/>
            <GameNavbar type="stop" onClickPlayers={handleOnClickPlayers} />
            <div className="mainGameScreen">
            hola
            <ActualPuntuation />
            </div>
        </section>
        </>
    );
}

export default MainBastaGame;