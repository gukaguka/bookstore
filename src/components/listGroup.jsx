import React from "react";
import './bookstore.css';

const ListGroup = (props) => {
const {items, textProperty, valueProperty} = props;

	return (
	<ul className='list-group length'>
	{items.map(item => <li onClick={() => props.onGenreSelect(item)} key={item[valueProperty]} className={ item === props.selectedItem ? 'list-group-item active' : 'list-group-item' }>{item[textProperty]}</li> )}
	
	</ul>
	)
};

ListGroup.defaultProps = {
	textProperty: 'name', valueProperty:'_id'
};

export default ListGroup;