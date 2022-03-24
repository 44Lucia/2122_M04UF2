import React from 'react';

class DeleteTask extends React.Component{

	constructor(props){
		super(props);
		this.state = {
		task: "",
		index: props.index
		};
	}

	HandleOnDelete = event => {
		this.props.handleOnDelete(this.state.index);
	}

	render() {
		return (
			<button onClick={this.HandleOnDelete}>Delete</button>
		);
	}

}

export default DeleteTask;
