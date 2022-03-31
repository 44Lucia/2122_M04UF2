import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

import React from 'react';

class  TaskSubmit extends React.Component{
	
	constructor (props){
		super(props);
		this.state ={

		}
	}

	render(){
		return(
			<Button startIcon={<AddIcon onClick=
			{this.props.HandleOnSubmit} />}></
			Button>
		);
	}
}

export default TaskSubmit;
