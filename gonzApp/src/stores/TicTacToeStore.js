import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import { calculateWinner } from '../components/TicTacToe/helpers';
import initialData from '../components/TicTacToe/data.json';

class TicTacToeStore extends EventEmitter {
	constructor() {
		super();
		this.table = {
	      history: [
	        {
	          squares: initialData
	        }
	      ],
	      stepNumber: 0,
	      xIsNext: true
	    };
	}

	getState() {
		return this.table;
	}

	updateTable(squares) {
		this.table = {
			history: [...this.table.history, {squares}],
			stepNumber: this.table.history.length,
			xIsNext: !this.table.xIsNext
		};
		this.emit('change');
    }
	updateStep(step) {
		this.table.stepNumber = step;
		this.table.xIsNext = (step % 2) === 0;
		this.emit('change');
	}

	handleActions(action) {
		switch (action.type) {
			case 'UPDATE_GAME_TABLE':
				this.updateTable();
				break;
			case 'UPDATE_GAME_MOVE':
				this.updateStep();
				break;
			default:

		}
	}
}

const ticTacToeStore = new TicTacToeStore();
dispatcher.register(ticTacToeStore.handleActions.bind(ticTacToeStore));
export default ticTacToeStore;
