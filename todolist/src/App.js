import React from 'react';
import './App.css';
import Title from './Title';
import Form from './Form';
import List from './List';

class App extends React.Component {
  
	constructor(props){
		super(props);
		this.state = {
		taskList: []
		};
	}	

	HandleOnSubmit = task => {
		this.state.taskList.push(task);
		this.setState({taskList : this.state.taskList});
	}

	HandleOnDelete = i => {
		
	}

  render(){
  	return (
    	<div className="App">
			<Title />
			<Form HandleOnSubmit = {this.HandleOnSubmit}/>
			
			<List taskList = {this.state.taskList}/>
    	</div>
  	);
  }

}

export default App;
