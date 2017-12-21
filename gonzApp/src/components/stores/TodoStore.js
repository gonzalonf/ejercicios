import { EventEmitter } from 'events';

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
				id: 10,
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
	getAll() {
		return this.todos;
	}
}

const todoStore = new TodoStore();
window.todoStore = todoStore;
export default todoStore;
