import React from 'react';
import FormInput from './FormInput'
import AddTask from './AddTask'

class Form extends React.Component{

	constructor(props){
		super(props);
		this.state = {
		task: ""
		};
	}

	HandleOnSubmit = event => {
		event.preventDefault();
		this.props.HandleOnSubmit(this.state.task);
		this.state.task = "";
	}

	HandleOnChange = (event) =>{
		this.setState({
			task: event.target.value
		});
	}

	render() {
		return (
			<form onSubmit= {this.HandleOnSubmit}>
				<FormInput value = {this.state.task} HandleOnChange={this.HandleOnChange} />	
				<AddTask />
			</form>
		);
	}
}

export default Form;
