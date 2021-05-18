// import SimpleNavbar from './components/SimpleNavbar'
import { useState } from 'react';
import GameNavbar from './components/GameNavbar'
import PlayersSideBar from './components/PlayersSideBar'

function App() {

  const [playersBarOpen, setPlayersBarOpen] = useState(false);

  const handleOnClickPlayers= () => {
    setPlayersBarOpen(!playersBarOpen);
  }

  return (
    <>
      <section className="gameContainer">
        <PlayersSideBar open={playersBarOpen} onClose={handleOnClickPlayers}/>
        <GameNavbar type="stop" onClickPlayers={handleOnClickPlayers} />
      </section>
    </>
  );
}

export default App;