import React from 'react';
import { Link } from 'react-router-dom'
 

const ExpenseListItem = ({id, dispatch, description, amount, createdAt }) => (
  <div>
    <Link to={{
      pathname: '/edit/'+id
    }}><h3>{description}</h3></Link>
    <p>{amount} - {createdAt}</p>
    
  </div>
);

// <Link to={`edit/${id}`}> {description} </Link>





export default ExpenseListItem;
