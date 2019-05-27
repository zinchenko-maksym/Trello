import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

const cardSource = {
	isDragging(props, monitor) {
		return monitor.getItem().id === props.id
	},

	beginDrag(props, monitor, component) {
		
		const item = { 
			name: props.name,
			id: props.id,
			listId: props.listId
		 }
		return item
	},

	endDrag(props, monitor, component) {
		
		if (!monitor.didDrop()) {
			return 
		}

		const item = monitor.getItem()
		const dropResult = monitor.getDropResult()
		return 0
	},
}

function collect(connect, monitor) {
	return {
		// Call this function inside render()
		// to let React DnD handle the drag events:
		connectDragSource: connect.dragSource(),
		connectDragPreview: connect.dragPreview(),
		// You can ask the monitor about the current drag state:
		isDragging: monitor.isDragging(),
	}
}

class Preview extends Component {

	cutCardName(name) {
			if(name.length>10){
				return name.slice(0, 24).concat("...")
			}
			return name
		}
	render() {

		const { isDragging, connectDragSource } = this.props
		const opacity = isDragging ? 0 : 1;
		return connectDragSource(
			<div className="list__item card" style={{opacity}}>
				{this.cutCardName(this.props.name)}
			</div>
			)
		/*return (
			<div className="list__item card">
				{this.cutCardName(this.props.name)}
			</div>
		);*/
	}
}

export default DragSource('card', cardSource, collect)(Preview)
