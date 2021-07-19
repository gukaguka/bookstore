import React, { Component } from 'react';


const Book = (props) => {


	return(
		<div key={props.book.id} className='book'>
			<div className='image-container'>
				<img src={props.book.poster} />
			</div>
				<h1>{props.book.title}</h1>
				<h3>{props.book.author}</h3>
				<h5>{props.book.price}</h5>
				<button className='btn btn-danger btn-sm'>ყიდვა</button>
			</div>
		);

}




export default Book;