import React from 'react';
import todoStore from '../stores/TodoStore';
import Tasks from './Tasks';

class Todo extends React.Component {
	constructor() {
		super();
		this.state =  {
			todos: todoStore.getAll()
		};
	}
	componentWillMount() {
		todoStore.on('change', () => {
			this.setState({
				todos: todoStore.getAll()
			});
		});
	}
	render() {
		return (
			<div className="contents contents-container">
				<h1>ToDo List</h1>
				<input type="text"/>
				<Tasks data={this.state.todos} />
			</div>
		);
	}
};

export default Todo;
