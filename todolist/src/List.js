import React from 'react';
import ListItem from './ListItem'
import './List.css'

class List extends React.Component
{
	constructor(props){
		super(props);
		this.state = {
			taskList: props.taskList			
		};
	}	

	HandleOnDelete = (index) => {
		this.state.taskList.splice(index,1);
		this.setState({taskList : this.state.taskList});
	}

	render(){
		let tasks = [];

		for(let i = 0; i < this.state.taskList.length; i++){
			tasks.push(<ListItem taskName={this.state.taskList[i]} key={i} index={i} handleOnDelete={this.HandleOnDelete} />);
		}

		return (
			<ul>
				{tasks}
			</ul>
		);
	}
}

export default List;
