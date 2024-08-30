import React from 'react';
import Snake from '../components/Snake';

function GamePage() {
    return (
        <div className="GamePage">
            <h1>Games</h1>
            <h2>Snake</h2>
            <Snake />
        </div>
    );
}

export default GamePage;
