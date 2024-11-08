import React from 'react';
import _ from "lodash"; 
import PropTypes from 'prop-types'; 

const Pagination = (props) => {
    const {itemcount, pageSize, onPagechange, currentPage} = props;
    const  pagecount  = Math.ceil(itemcount / pageSize); 
    if (pagecount === 1){
        return null
    }
    const page = _.range(1, pagecount + 1)
    return <nav>
        <ul className="pagination">
            {page.map(pages =>  <li key={pages} className={currentPage === pages ? "page-item active" : "page-item"}><a className="page-link" onClick={() => onPagechange(pages)}>{pages}</a></li>)}
           
        </ul>
    </nav>;
}

Pagination.propTypes = {
    itemcount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onPagechange: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
}

export default Pagination;