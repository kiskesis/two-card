import React from 'react';
import './index.css';

function Rules() {
    return (
        <div>
            <h1>Instructions:</h1>
            <p>
                Create a mini game where clicking the button generates several hand cards.<br/>
                Please be sure to fork this repo and update the readme file with your notes.
            </p>
            <ul>
                <li>A hand has 7 cards</li>
                <li>The winner of the game will be by the amount of pairs a hand has</li>
                <li>Each "deal" will create a brand new "game" with new hands</li>
                <li>Display those hands</li>
                <li>Mark each hand "pairs" with proper border. Be sure diff pair has diff border</li>
                <li>Game has two hands by default</li>
                <li>Organized code</li>
            </ul>
            <h5>Extra</h5>
            <ul>
                <li>option to add or remove hands 2-4</li>
                <li>Tests</li>
            </ul>
        </div>
    );
}

export default Rules;
