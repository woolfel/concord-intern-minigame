import React from 'react'

function Players({playerlist}) {
    return (
        <div className="Player-heading">Players: 
           <div>{playerlist.map((p) => (
               <div className="player-item">{p.playerName} - {p.playerPiece}<div>{p.wallet}</div></div>
           ))}</div>
        </div>
    )
}

export default Players;