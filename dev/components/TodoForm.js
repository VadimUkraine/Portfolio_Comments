import React from 'react'; 

class TodoForm extends React.Component{
	constructor(){
		super();

		this.state={
			text: '',
			comment: ''
		}
		this.handleChange=this.handleChange.bind(this);
		this.handleChange2=this.handleChange2.bind(this);
		this.handleAdd=this.handleAdd.bind(this);
	}

	handleChange(e){
		this.setState({
			text:e.target.value
		});
		
	}
	handleChange2(e){
		this.setState({
			comment: e.target.value
		});
		
	}
	submitForm(e){
		e.preventDefault(); 
	}
	handleAdd(){
		if (!this.state.text || !this.state.comment){
			return;
		}
		const newTodo={
			id: Date.now(),
			text: this.state.text,
			comment: this.state.comment
		};
		this.props.addTodo(newTodo);
		this.setState({
			text: '',
			comment: ''
		});

	}

	render() {
			return (
				<form className="todo-form" onSubmit={this.submitForm}>
					<input
					placeholder="write your name here"
					className="todo-form_textarea_name"
					value={this.state.text}
					onChange={this.handleChange}
					/>
					<input
					placeholder="write your comment here"
					className="todo-form_textarea_comment"
					value={this.state.comment}
					onChange={this.handleChange2}
					/>	
					<button
					className="todo-form_button"
					onClick={this.handleAdd}
					>
						 add comment? Are you sure?
					</button>
				</form>	
			)
	}
}

export default TodoForm;
