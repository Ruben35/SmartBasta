// import SimpleNavbar from './components/SimpleNavbar'
import GameNavbar from './components/GameNavbar'
import PlayersBar from './components/PlayersBar'

function App() {

  const handleOnClickPlayers= (value)=>{
    console.log(value);
  }

  return (
    <><section className="gameContainer">
        <PlayersBar/>
        <GameNavbar type="stop" onClickPlayers={handleOnClickPlayers}/>
      </section>
    </>
  );
}

export default App;
