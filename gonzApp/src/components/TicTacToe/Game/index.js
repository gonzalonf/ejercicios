import React from 'react';
import Board from '../Board';
import { calculateWinner } from '../helpers';
import TicTacToeStore from '../../../stores/TicTacToeStore';
import * as TicTacToeActions from '../../../actions/TicTacToeActions';



class Game extends React.Component {
  constructor(props) {
    super(props);
	this.getTableState = this.getTableState.bind(this);
    this.state = TicTacToeStore.getState();
  }

  getTableState() {
	  this.setState(TicTacToeStore.getState());
  }

  componentDidMount() {
	  TicTacToeStore.on('change', this.getTableState );
  }
  componentWillUnmount() {
	  TicTacToeStore.removeListener('change', this.getTableState );
  }
  handleClick(i) {
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares = current.squares;
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";

	TicTacToeStore.updateTable(squares);
  }

  jumpTo(step) {
	  TicTacToeStore.updateStep(step);
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current);
    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }
	console.log(this.state);
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}


export default Game;
