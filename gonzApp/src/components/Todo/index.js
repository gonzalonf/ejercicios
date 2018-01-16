import React from 'react';
import todoStore from '../../stores/TodoStore';
import * as TodoActions from '../../actions/TodoActions';
import Tasks from './Tasks';

class Todo extends React.Component {
	constructor() {
		super();
		this.getTodos = this.getTodos.bind(this);
		this.state =  {
			todos: todoStore.getAll(),
			input: '',
		};
	}
	componentDidMount() {
		todoStore.on('change', this.getTodos );
		console.log(todoStore.listenerCount('change'));
	}
	componentWillUnmount() {
		todoStore.removeListener('change', this.getTodos );
	}
	getTodos() {
		this.setState({
			todos: todoStore.getAll(),
		});
	}
	handleChange(e) {
		this.setState({input: e.target.value});
	}
	handleSubmit(e) {
		e.preventDefault();
		this.createTodo();
	}
	createTodo() {
		const inputValue = this.state.input;
		if (inputValue) {
			TodoActions.createTodo(inputValue);
		}
	}
	deleteTodo(e) {
		// ()=>console.log(data[key])
		console.log(e.target);
	}
	reloadTodos() {
		TodoActions.reloadTodos();
	}
	render() {
		return (
			<div className="contents contents-container">
				<h1>ToDo List</h1>

				<form action="" onSubmit={this.handleSubmit.bind(this)}>
					<input
						type="text"
						onChange={this.handleChange.bind(this)}
					/>
				</form>
				<button onClick={this.createTodo.bind(this)}>Add</button>

				<br/>
				<button onClick={this.reloadTodos.bind(this)}>REOLAD</button>
				<Tasks onClick={this.deleteTodo.bind(this)} data={this.state.todos} />
			</div>
		);
	}
};

export default Todo;
