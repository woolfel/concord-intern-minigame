import React from 'react'

function Players({playerlist}) {
    return (
        <div className="Player-heading">Players: 
           <div>{playerlist.map((p) => (
               <div>{p.playerName} - {p.playerPiece}</div>
           ))}</div>
        </div>
    )
}

export default Players;