import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class TicTacToeStore extends EventEmitter {
	constructor() {
		super();
	}

	handleActions(action) {

		}
}

const ticTacToeStore = new TicTacToeStore();
dispatcher.register(TicTacToeStore.handleActions.bind(TicTacToeStore));
export default ticTacToeStore;
