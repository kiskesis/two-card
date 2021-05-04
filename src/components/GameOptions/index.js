import React from 'react';
import './index.css';

function GameOptions({ players, changePlayer }) {
    return (
        <div className="game-options">
            <h2>Game</h2>
            <button className="game-options__button" onClick={changePlayer}>Add Player</button>
            <button className="game-options__button" onClick={() => changePlayer(false)}>Remove Player</button>
            <h2 className="players">Players: { players }</h2>
        </div>
    );
}

export default GameOptions;
