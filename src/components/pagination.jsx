import React, { Component } from 'react';
import './bookstore.css'
import _ from 'lodash';
import PropTypes from 'prop-types';

const Pagination = (props) => {

const {booksCount , pageSize, currentPage , onPageChange} = props;

const pagesCount = Math.ceil(booksCount / pageSize);
if(pagesCount === 1) return null;
const pages = _.range(1, pagesCount+1);
 

return(
<nav aria-label="Page navigation example" className="paginate">
  <ul className="pagination">
  {pages.map(page => (<li key={page} className={page === currentPage ? "page-item active " : "page-item"}><a onClick={()=> props.onPageChange(page)} className="page-link" href="#">{page}</a></li>))}
    
   
  </ul>
</nav>
);
	}

Pagination.propTypes = {
	booksCount: PropTypes.number.isRequired,
	 pageSize: PropTypes.number.isRequired, 
	 currentPage: PropTypes.number.isRequired,
	 onPageChange: PropTypes.func.isRequired
};

export default Pagination;