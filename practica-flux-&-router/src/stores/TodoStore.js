import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class TodoStore extends EventEmitter {
	constructor() {
		super();
		this.todos = [
			{
				id: 120,
				text: 'hacer algo',
				complete: false
			},
			{
				id: 100,
				text: 'otra cosa',
				complete: false
			},
			{
				id: 10,
				text: 'otra cosa más',
				complete: true
			}
		];
	}
	createTodo(text,complete=false) {
		const id = Date.now();
		this.todos.push({
			id,
			text,
			complete,
		});
		this.emit("change");
	}
	deleteTodo(id) {
		const itemId = Number(id);
		const newList = this.todos.filter( item => item.id !== itemId );
		this.todos = newList;
		this.emit('change');
	}
	getAll() {
		return this.todos;
	}
	getCount() {
		return this.todos.length;
	}
	handleActions(action) {
		switch (action.type) {
			case 'CREATE_TODO':
				this.createTodo(action.text);
				break;
			case 'RECEIVE_TODOS':
				this.todos = action.todos;
				this.emit('change');
				break;
			case 'DELETE_TODO':
				this.deleteTodo(action.id);
				break;
			default:

		}
		console.log('todoStore recieve action', action);
	}
}

const todoStore = new TodoStore();
dispatcher.register(todoStore.handleActions.bind(todoStore));
export default todoStore;
