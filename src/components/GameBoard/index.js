import React, {useState} from 'react';
import './index.css';
import ResultList from "../ResultLits";
import GameOptions from "../GameOptions";
import Rules from "../Rules";
import {findDuplicates, getRandomColor} from "../../common/utils/utils";
import {cards} from "../../common/constants";

function GameBoard() {
    const [hands, setHands] = useState([])
    const [players, setPlayers] = useState(2)

    function getRandomCards() {
        // Getting random unique cards
        const randomCards = cards
            .sort(() => Math.random() - Math.random())
            .slice(0, players * 7)

        // Grouping random cards by player hands
        const groupedByHandsCards = Array
            .apply(null, Array(players))
            .map((_, index) => randomCards
                .slice(index * 7, (index + 1) * 7)
            )

        // Generating hand object with pairs and colors and pairCounter for count winner
        const newHands = groupedByHandsCards.map(hand => {
            const cards = hand.map(({card}) => card)
            const pairs = findDuplicates(cards).reduce((acc, value) => {
                acc[value] = getRandomColor()

                return acc
            }, {})

            return {
                cards: hand,
                pairs,
                pairCounter: Object.keys(pairs).length
            }
        })

        setHands(newHands)
    }

    function changePlayer(add = true) {
        if ((add && players === 4) || (!add  && players === 2)) {
            return;
        }

        setPlayers(add ? players + 1 : players - 1)
    }

    return (
        <div className="App">
            <Rules/>
            <GameOptions players={players} changePlayer={changePlayer}/>
            <ResultList hands={hands}/>
            <div>
                <h4>Deal Button:</h4>
                <button className="play-button" onClick={getRandomCards}>
                    Deal Cards
                </button>
            </div>
        </div>
    );
}

export default GameBoard;
