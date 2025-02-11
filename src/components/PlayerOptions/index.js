import React from 'react';
import './index.css';

function PlayerOptions({ handNumber, hand, removePlayer }) {
    return (
        <div className="hand-player">
            <h4 className="player-number">Player {handNumber + 1}</h4>
            <h4 className="player-pairs">Pairs: {hand.pairCounter}</h4>
            <button onClick={() => removePlayer(handNumber)}>Remove player</button>
        </div>
    );
}

export default PlayerOptions;
