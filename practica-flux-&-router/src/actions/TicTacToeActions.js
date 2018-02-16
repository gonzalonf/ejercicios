import dispatcher from '../dispatcher';

export function updateTable(text) {
	dispatcher.dispatch({
		type: 'UPDATE_GAME_TABLE',
		text,
	});
}

export function updateStep(text) {
	dispatcher.dispatch({
		type: 'UPDATE_GAME_MOVE',
		text,
	});
}
