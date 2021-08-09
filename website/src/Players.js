import React from 'react'

function Players({playerlist}) {
    return (
        <div className="Player-heading">Players: 
           <div>{playerlist.map((p) => (
               <div className="player-item">
                <img src={'./resources/gamepiece/' + p.playerPiece + '.svg'} alt={p.playerPiece}></img>
                <div>{p.playerName}</div>
                <div className="player-wallet">{p.wallet}</div>
               </div>
           ))}</div>
        </div>
    )
}

export default Players;