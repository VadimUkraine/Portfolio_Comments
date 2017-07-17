import React from 'react'; 

class TodoItem extends React.Component{
	constructor(){
		super();

		this.deleteTodoFromItem=this.deleteTodoFromItem.bind(this);
	}

	deleteTodoFromItem(){
		this.props.deleteTodoFromList(this.props.id);
	}

	render() {
		return (
			<li key={this.props.id}>
				<span onClick={this.deleteTodoFromItem} >X</span>
				{this.props.text}: <cite>{this.props.comment}</cite>
			</li>		
		)
	}
}

export default TodoItem;
