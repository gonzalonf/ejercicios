import React from 'react';
import ReactDOM from 'react'
import Game from './Game';


const TicTacToe = () => {
	return (
		<div className="container">
			<div className="wrapper">
				<div className="tic-tac-toe">
					<Game />
				</div>
			</div>
		</div>
	);
}

export default TicTacToe;
