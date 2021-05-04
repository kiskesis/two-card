import React from 'react';
import './index.css';
import PlayerOptions from "../PlayerOptions";
import { uuid } from 'uuidv4';

function ResultList({ hands }) {
    return (
        <div className="result-list">
            {
                hands && hands.map((hand, handNumber) => (
                    <div className="hand" key={uuid()}>
                        <PlayerOptions hand={hand} handNumber={handNumber} />
                        {
                            hand.cards.map(({card, name}) => (
                                <img
                                    key={uuid()}
                                    alt={name}
                                    className={hand.pairs[card] ? 'card pair' : 'card'}
                                    src={`cards/${name}.svg`}
                                    style={hand.pairs[card] ? {
                                        border: `3px solid ${hand.pairs[card]}`,
                                    } : null}
                                />
                            ))
                        }
                    </div>
                ))
            }
        </div>
    );
}

export default ResultList;
