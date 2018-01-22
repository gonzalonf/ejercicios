import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import { calculateWinner } from '../components/TicTacToe/helpers';


class TicTacToeStore extends EventEmitter {
	constructor() {
		super();
		this.initialState = {
	      history: [
	        {
	          squares: Array(9).fill(null)
	        }
	      ],
	      stepNumber: 0,
	      xIsNext: true
	    };
	}

	getInitialState() {
		return this.initialState;
	}

	updateTable(squares) {
		this.setState({
			history: this.history.concat([{squares: squares}]),
			stepNumber: this.history.length,
			xIsNext: !this.state.xIsNext
		});
		this.emit('change');
    }
}

const ticTacToeStore = new TicTacToeStore();
// dispatcher.register(TicTacToeStore.handleActions.bind(TicTacToeStore));
export default ticTacToeStore;
