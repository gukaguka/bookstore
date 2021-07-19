import React, { Component, useState, useEffect } from 'react';
import {getBookList} from'../bookList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './bookstore.css';
import Buy from './buy';
import OpenWindow from './openWindow';
import _ from 'lodash';
import {getGenres} from '../genresList';
import Pagination from './pagination';
import { paginate } from './utils/paginate';
import ListGroup from './listGroup';
import NavBar from './navBar';
import { Route, Switch, Redirect } from 'react-router-dom';
import Cart from './cart';
import BuyFromCart from './buyFromCart';
//import Counter from './counter';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
//import CallRequest from './database'
import axios from 'axios';
import Box from '@material-ui/core/Box';
import { shadows } from '@material-ui/system';


const Bookstore = () => {

	var bookArray = getBookList();
	const [ inject, setInject ] = useState({});
	const [ x, setX ] = useState(false);
	const [ openBookInNewWindow, setOpenBookInNewWindow ] = useState(false);
	const [ whichBookToOpen, setWhichBookToOpen ] = useState({});


	const [ currentPage, setCurrentPage] = useState(1);
	const [selectedGenre, setSelectedGenre] = useState({});
	const [genres, setGenres] = useState([{ _id: '', name:'ყველა' }, ...getGenres()]);
	const [sortColumn, setSortColumn] = useState({path: 'title', order: 'asc'});

	var state = {
	books: getBookList(),
	genres: [],
	pageSize: 6,
	//sortColumn: {path: 'title', order: 'asc'}
	};


	 const handlePageChange = (page) => {
 				setCurrentPage(page);
 				 }

    const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
    //this.setState({ movies:filtered })
    	setCurrentPage(1);
    }

   const handleSort = (sorted) => {
    setSortColumn({ sorted });
    }

    
	const pages = 4;

    const filtered = selectedGenre && selectedGenre._id ? state.books.filter(m => m.genre._id === selectedGenre._id) : state.books;

	const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

	const booksArray = paginate(sorted, currentPage, state.pageSize);

	const [carting, setCarting] = useState([]);

	const onDelete = (cart) => {
		const cartings = carting.filter(c => c.id !== cart.id);
		setCarting(cartings); setItemCount(itemCount - 1);
	}

	const [ buyCart, setBuyCart ] = useState(false);

	const [ itemCount, setItemCount ] = useState(null);

	const uniqueObjects = [...new Map(carting.map(item => [item.id, item])).values()];

	const [form, setForm ] = useState({phone: ''})

	const enterPhone = (event) => {
		setForm({phone: event.target.value}); 
		//setFrom(name: injected.title);
	}

	const onSubmit = (injected) => {
		
		const registered = {
			name: injected.title,
			phone: form.phone,
		}
		console.log(registered);
		axios.post('http://localhost:4000/application/bookstore', registered).then(res => console.log(res.data));
	}

	return(
		<>		
				
				

			<NavBar onItemCount={uniqueObjects} />
			<Switch>
				<Route path='/bookstore' exact component={this}></Route>
				<Route path='/cart' render={() => <Cart carting={carting} handleDelete={onDelete}>
				<button className='btn btn-danger btn-lg  margin' onClick={() => {setBuyCart(true)}}>ყიდვა</button></Cart>}></Route>
				<Redirect from="/" exact to="/bookstore" />
  				<Redirect to='/notFound' />
			</Switch>
			<ListGroup items={genres}  onGenreSelect={handleGenreSelect}  selectedItem={selectedGenre} />
		<div className='shelf'>
			{booksArray.map(book => {
				return(
					<Box boxShadow={5} key={book.id} className='margins'>
					<div  className='book' onClick={() => {setWhichBookToOpen(book);
					setOpenBookInNewWindow(true);} }>
			<div className='image-container'>
				<img className='poster' src={book.poster} />
			</div>
				<h1 className="title">{book.title}</h1>
				<h3 className='author'>{book.author}</h3>
				<div className='pricing' onClick={(e) => {e.stopPropagation()}} >
				<h5 className='price'>{book.price}</h5>
				</div>
				
				<button className='btn btn-danger btn-sm bottom1' onClick={(e)=>{setInject(book);
					setX(true); e.stopPropagation();}}>ყიდვა</button>
				<button className='btn btn-info btn-sm bottom' 
				onClick={(e)=> {setCarting([...carting, book]); e.stopPropagation();setItemCount(itemCount + 1)}} >დამატება<AddShoppingCartIcon /></button>
			</div></Box>);}
		)}


			<OpenWindow trigger={openBookInNewWindow} setTrigger={setOpenBookInNewWindow}>
				<div className='inside'>
				<div className='inside-container'>
				<a href={whichBookToOpen.poster}>
				<img className='poster2' src={whichBookToOpen.poster} />
				</a>
				</div>
				<div className='text'>
				<h1 className="title">{whichBookToOpen.title}</h1>
				<h3 className='author'>{whichBookToOpen.author}</h3>
				<div className='discription'>
				<p><strong>აღწერა:</strong><br/>{whichBookToOpen.discription}</p>
				</div>
				</div>
			</div>
				
				<h5 className='price'>{whichBookToOpen.price}</h5>
				<button className='btn btn-danger btn-sm bottom' onClick={(e)=>{setInject(whichBookToOpen);
					setX(true);  e.stopPropagation();}}>ყიდვა</button>
			</OpenWindow>



				<Buy trigger={x} setTrigger={setX}> 
				<div className='image-container1'>
				<h1 className='title'>{inject.title}</h1>
				<a href={inject.poster}>
				<img className='poster' src={inject.poster} />
				</a>
				</div>
				<div className='buy-container'>
				<h5 className='phone'><strong>აკრიფეთ თქვენი ტელეფონის ნომერი და ჩვენი კონსულტანტი დაგიკავშირდებათ:</strong></h5>
				<form onSubmit={() => onSubmit(JSON.stringify(inject.map(i => [i.title, i.price])))}>
				<input className='form-control form-group' type='tel'
				minLength='7'
				maxLength='9'
				onInvalid={(e) => { e.target.setCustomValidity('შეიყვანეთ ნომერი სწორედ! მობილური(9 ციფრი) ან ქალაქის ნომერი(7 ციფრი)') }}
				required
				 placeholder='აკრიფე ნომერი'
				  onChange={enterPhone} 
				  value={form.phone} />
				  <input type='submit' 
				  className='btn btn-danger btn-block new'
				   value='მოთხოვნის გაგზავნა' />
				</form>
				</div>
				</Buy>

				<BuyFromCart trigger={buyCart} setTrigger={setBuyCart}>
				<h5>აკრიფეთ თქვენი ტელეფონის ნომერი და ჩვენი კონსულტანტი დაგიკავშირდებათ</h5>
				<form onSubmit={() => onSubmit(JSON.stringify(uniqueObjects.map(i => [i.title, i.price])))}>
				<input  placeholder='აკრიფე ნომერი'/>
				<input type='submit' 
				  className='btn btn-danger btn-block new'
				   value='მოთხოვნის გაგზავნა' />
				</form>
				</BuyFromCart>

				
				
	</div>

	<Pagination  className = "pagination" booksCount={filtered.length} pageSize={state.pageSize} pages={pages} onPageChange={handlePageChange} currentPage={currentPage} />
	</>
	);
	

}


export default Bookstore;
