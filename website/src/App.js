import './App.css';
import Players from './Players';
import React, { useState } from 'react';
import {Modal, Button} from "react-bootstrap";
import Select from 'react-select';

const LOCAL_STORAGE_KEY = 'dimsum.data'
const game_pieces = [ {label:'rat', value: "rat"},
  {label:'horse', value: "horse"},
  {label:'pig', value: "pig"},
  {label:'monkey', value: "monkey"},
  {label:'dragon', value: "dragon"},
  {label:'rabbit', value: "rabbit"},
  {label:'dog', value: "dog"},
  {label:'snake', value: "snake"}
];
const chance_cards = [
  {label:"Go back 2 spaces", action:"move forward", value:-2},
  {label:"You've been elected king of the party", action:"pay everyone", value: 10},
  {label:"Free meal or banquet", action:"get", value:60},
  {label:"Go to start and collect $40", action:"to start", value:40},
  {label:"Sales tax", action:"pay", value:5}
];
const chef_blessing_cards = [
  {label:"Youtuber discount, collect $50", action:"get", value:50},
  {label:"Instagramer collect $25", action:"get", value:25},
  {label:"Voted best restaurant, collect $10 from everyone", action:"get everyone", value:15}
];
var diceValue = 0;

function handleStartGame(e) {
  console.log("start the game");
}

function handleRollDice(e) {
  console.log("roll the dice if the game has started");
  var die = document.getElementById("dicevalue");
  diceValue = Math.floor(Math.random() * 6) + 1;
  die.innerHTML = diceValue;
}

function handleChance(e) {
  console.log("get a new chance card");
  var randomchance = Math.floor(Math.random() * chance_cards.length);
  var card = chance_cards[randomchance];
  var chanceElement = document.getElementById("chance");
  chanceElement.innerHTML = card.label;
}

function handleBlessing(e) {
  console.log("get a new blessing from a chef");
  var randombless = Math.floor(Math.random() * chef_blessing_cards.length);
  var card = chef_blessing_cards[randombless];
  var blessElement = document.getElementById("blessing");
  blessElement.innerHTML = card.label;
}

function App() {
  const playerarray = useState([])
  const [show, setShow] = useState(false);

  const handleClose = () => { setShow(false) };
  const handleShow = () => { setShow(true) };
  const handleSavePlayer = () => {
    setShow(false)
  };
  
  return (
    <div className="App">
      <div><img src="./resources/dimsum-logo.svg" alt="dimsum logo"></img></div>
      <div>Next Player: </div>
      <div><img src="./resources/dice_red.png" alt="dice"></img><div id="dicevalue">0</div></div>
      <div className="Left-menu">
            <button onClick={handleShow}>Add Player</button>
            <Modal show={show} onHide={handleClose} className="modal">
              <Modal.Header>
                <Modal.Title>Add New Player</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <input className="modal-input" type="text" placeholder="name" id="newplayername"></input>
                <Select options={game_pieces} id="newplayerpiece"/>
              </Modal.Body>
              <Modal.Footer>
                <Button className="modal-btn" variant="secondary" onClick={handleClose}>Close</Button>
                <Button className="modal-btn" variant="primary" onClick={handleSavePlayer}>Save</Button>
              </Modal.Footer>
            </Modal>
            <button onClick={handleStartGame}>Start Game</button>
            <button onClick={handleRollDice}>Roll Dice</button>
            <button onClick={handleChance}>Chance</button>
            <button onClick={handleBlessing}>Chef's blessing</button>
      </div>
      {/* div for the game grid */}
      <div className="App-grid">
        <div className="App-grid-item" id="sq5">heavenly pot stickers</div><div className="App-grid-item2" id="sq6">Ding Tai Fung</div><div className="Grid-item-bus" id="sq7">Greyhound Bus</div><div className="App-grid-item2" id="sq8">Jasmine Palace</div><div className="App-grid-item" id="sq9"><p>No more ingredients</p><p>loose 1 turn</p></div>
        <div className="App-grid-item2" id="sq4">Iced Thai Dream<p><img src="./resources/thai_tea.png"></img></p></div><div ></div><div ><div id="blessing"></div></div><div ></div><div className="App-grid-item2" id="sq10">Little Love</div>
        <div className="Grid-item-train" id="sq3">central station</div><div ></div><div ><img src="./resources/guabao.svg"></img></div><div ></div><div className="Grid-item-skyway" id="sq11">skyway Station</div>
        <div className="App-grid-item2" id="sq2">bobba city</div><div ></div><div ><div id="chance"></div></div><div ></div><div className="App-grid-item2" id="sq12">Pho Now #5<p><img src="./resources/pho_bowl.png"></img></p></div>
        <div className="App-grid-item" id="sq1">start</div><div className="App-grid-item2" id="sq17">Dragon Dumplings</div><div className="Grid-item-car" id="sq16">Shared Ride</div><div className="App-grid-item2" id="sq14">Scallion House</div><div className="App-grid-item" id="sq13">Oolong Temple</div>
      </div>
      <Players playerlist={playerarray}/>
    </div>
  );
}

export default App;
