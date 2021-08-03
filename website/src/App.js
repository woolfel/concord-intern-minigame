import logo from './logo.svg';
import './App.css';
import Players from './Players';
import { useState } from 'react';

function App() {
  const [playerarray] = useState([])

  return (
    <div className="App">
      <div>logo</div>
      <Players playerlist={playerarray}/>
      <div>last roll</div>
      <div>left column</div>
      {/* div for the game grid */}
      <div className="App-grid">
        <div className="App-grid-item">heavenly pot stickers</div><div className="App-grid-item">Ding Tai Fung</div><div className="Grid-item-bus">Greyhound Bus</div><div className="App-grid-item">Jasmine Palace</div><div className="App-grid-item">No more ingredients</div>
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
