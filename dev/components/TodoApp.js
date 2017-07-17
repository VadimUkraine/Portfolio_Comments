import React from 'react'; 
import TodoForm from './TodoForm';
import TodoList from './TodoList';


class TodoApp extends React.Component{
	constructor(){
		super();

		this.state={
			notes: (localStorage.getItem('notes')? JSON.parse(localStorage.getItem('notes')):[])
		}
		this.handleAdd = this.handleAdd.bind(this);
		this.handleDelete = this.handleDelete.bind(this)
	}

	handleAdd(newTodo){
		this.setState({
			notes: [newTodo, ...this.state.notes]
		});
		
	}

	handleDelete(oldTodo){
		this.setState({
			notes: this.state.notes.filter(todo => todo.id !== oldTodo)
		});
		
	}
	
	render() {
		localStorage.setItem('notes', JSON.stringify(this.state.notes))
		return (
			<div className="todo">
				<TodoForm addTodo={this.handleAdd }  />
				<TodoList deleteTodoFromApp={this.handleDelete} list={this.state.notes} />
			</div>
			)
	}

}

export default TodoApp;

