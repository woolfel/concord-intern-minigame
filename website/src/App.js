import logo from './logo.svg';
import './App.css';
import Players from './Players';
import { useState, Component, useRef } from 'react';

const LOCAL_STORAGE_KEY = 'dimsum.data'

function handleAddPlayer(e) {
  console.log("add a new player");
}

function handleStartGame(e) {
  console.log("start the game");
}

function handleRollDice(e) {
  console.log("roll the dice if the game has started");
}

function handleChance(e) {
  console.log("get a new chance card");
}

function handleBlessing(e) {
  console.log("get a new blessing from a chef");
}

function App() {
  const [playerarray] = useState([])

  return (
    <div className="App">
      <div>Logo</div>
      <div>Next Player: </div>
      <div><img src="./resources/dice_red.png"></img></div>
      <div className="Left-menu">
            <button onClick={handleAddPlayer}>Add Player</button>
            <button onClick={handleStartGame}>Start Game</button>
            <button onClick={handleRollDice}>Roll Dice</button>
            <button onClick={handleChance}>Chance</button>
            <button onClick={handleBlessing}>Chef's blessing</button>
        </div>
      {/* div for the game grid */}
      <div className="App-grid">
        <div className="App-grid-item" id="sq5">heavenly pot stickers</div><div className="App-grid-item2" id="sq6">Ding Tai Fung</div><div className="Grid-item-bus" id="sq7">Greyhound Bus</div><div className="App-grid-item2" id="sq8">Jasmine Palace</div><div className="App-grid-item" id="sq9"><p>No more ingredients</p><p>loose 1 turn</p></div>
        <div className="App-grid-item2" id="sq4">Iced Thai Dream</div><div ></div><div ></div><div ></div><div className="App-grid-item2" id="sq10">Little Love</div>
        <div className="Grid-item-train" id="sq3">central station</div><div ></div><div >DimSum<img src="./resources/guabao.svg"></img></div><div ></div><div className="Grid-item-skyway" id="sq11">skyway Station</div>
        <div className="App-grid-item2" id="sq2">bobba city</div><div ></div><div ></div><div ></div><div className="App-grid-item2" id="sq12">Pho Now #5</div>
        <div className="App-grid-item" id="sq1">start</div><div className="App-grid-item2" id="sq17">Dragon Dumplings</div><div className="Grid-item-car" id="sq16">Shared Ride</div><div className="App-grid-item2" id="sq14">Scallion House</div><div className="App-grid-item" id="sq13">Oolong Temple</div>
      </div>
      <Players playerlist={playerarray}/>
    </div>
  );
}

export default App;
