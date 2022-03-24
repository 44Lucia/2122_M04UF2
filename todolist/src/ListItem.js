import DeleteTask from './DeleteTask'

function ListItem(props) {

	return (
		<li>
			<p>{props.taskName}
			<DeleteTask index={props.index} handleOnDelete={props.handleOnDelete} />
			</p>
		</li>
	)

}

export default ListItem;
