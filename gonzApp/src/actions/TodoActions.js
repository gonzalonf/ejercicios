import dispatcher from '../dispatcher';

export function createTodo(text) {
	dispatcher.dispatch({
		type: 'CREATE_TODO',
		text,
	});
}

export function deleteTodo(id) {
	dispatcher.dispatch({
		type: 'DELETE_TODO',
		id,
	});
}

export function reloadTodos() {
	dispatcher.dispatch({type: 'FETCH_TODOS'});
	setTimeout( () => {
		dispatcher.dispatch({type: 'RECEIVE_TODOS', todos: [
			{
				id: 120,
				text: 'comprar vinito!!!',
				complete: false
			},
			{
				id: 10,
				text: 'prepar picada',
				complete: false
			},
		] })
	}, 1000);
}
