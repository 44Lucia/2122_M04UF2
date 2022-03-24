import React from 'react';

class FormInput extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			
		}
	}

	HandleSubmit = (event) =>{
		this.props.HandleOnChange(event);
		console.log(this.state.value);
	}

	HandleOnChange = (event) =>{
		this.props.HandleOnChange(event);
		this.setState({value : event.target.value});
	}

	render() {
		return(
			<label htmlFor="task-input">Tarea
			<input type="text" id="task-input" onChange={this.HandleOnChange} value={this.props.value}/>
			</label>
	)}

}

export default FormInput;
