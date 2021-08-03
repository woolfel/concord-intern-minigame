import logo from './logo.svg';
import './App.css';
import Players from './Players';
import { useState, Component, useRef } from 'react';

const LOCAL_STORAGE_KEY = 'dimsum.data'

function handleAddPlayer(e) {

}

function handleStartGame(e) {

}

function handleRollDice(e) {

}

function handleChance(e) {

}

function handleBlessing(e) {

}

function App() {
  const [playerarray] = useState([])

  return (
    <div className="App">
      <div>logo</div>
      <Players playerlist={playerarray}/>
      <div>last roll</div>
      <div className="Left-menu">
            <button onClick={handleAddPlayer}>Add Player</button>
            <button onClick={handleStartGame}>Start Game</button>
            <button onClick={handleRollDice}>Roll Dice</button>
            <button onClick={handleChance}>Chance</button>
            <button onClick={handleBlessing}>Chef's blessing</button>
        </div>
      {/* div for the game grid */}
      <div className="App-grid">
        <div className="App-grid-item">heavenly pot stickers</div><div className="App-grid-item">Ding Tai Fung</div><div className="Grid-item-bus">Greyhound Bus</div><div className="App-grid-item">Jasmine Palace</div><div className="App-grid-item"><p>No more ingredients</p><p>loose 1 turn</p></div>
        <div className="App-grid-item">Iced Thai Dream</div><div ></div><div ></div><div ></div><div className="App-grid-item">Little Love</div>
        <div className="Grid-item-train">central station</div><div ></div><div >DimSum</div><div ></div><div className="Grid-item-skyway">skyway Station</div>
        <div className="App-grid-item">bobba city</div><div ></div><div ></div><div ></div><div className="App-grid-item">Pho Now #5</div>
        <div className="App-grid-item">start</div><div className="App-grid-item">Dragon Dumplings</div><div className="App-grid-item">Shared Ride</div><div className="App-grid-item">Scallion House</div><div className="App-grid-item">Oolong Temple</div>
      </div>
      <div> right </div>
    </div>
  );
}

export default App;
