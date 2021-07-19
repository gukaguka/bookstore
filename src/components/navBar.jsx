import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Cart from './cart';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './bookstore.css';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import Button from '@material-ui/core/Button';


const NavBar = (props) => {
	
	return(
	<nav className="navbar navbar-expand-lg navbar-light bg-light" style={{padding:"0px", marginBottom:"30px"}}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><Button variant='contained' color='primary '><StorefrontOutlinedIcon /> მთავარი</Button></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item"> 
          <NavLink className="nav-link" aria-current="page" to="/cart"><div className='cart btn'>ჩემი კალათა <ShoppingCartIcon fontSize='large' />{props.onItemCount.length}  </div></NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
	);
};

export default NavBar;