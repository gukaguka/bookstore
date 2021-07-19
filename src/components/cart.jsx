import React, { Component, useState, useEffect } from 'react';
import './bookstore.css';

const Cart = (props) => {
	var idNum = 0;
	const uniqueObjects = [...new Map(props.carting.map(item => [item.id, item])).values()]
	return(
		<>
		<table className='table'>
		<thead>
		<tr>
		<th></th>
		<th>პროდუქტი</th>
		<th>რაოდენობა</th>
		<th>ფასი</th>
		<th></th>
		</tr>
		</thead>
		<tbody>
		{uniqueObjects.map((cart) => {

		
			return (

		<tr key={idNum + 1}>
			<td><img src={cart.poster} className='cart-image' /></td>
			<td>{cart.title}</td>
			<td>{cart.price}</td>
			<td><button className='btn btn-danger btn-sm' onClick={() => props.handleDelete(cart) }>წაშლა</button></td>
		</tr>
		)})}
		
		</tbody>
		</table>
		{props.children}
		</>
		);

}

export default Cart;