import React from 'react';
import {NavLink } from 'react-router-dom';
const Header  = () => (
    <header>
        <h3> Expensify</h3>
        <nav>
            <ul>
                <li><NavLink to="/" activeClassName="is-active">Home</NavLink></li>
                <li><NavLink to="/create" activeClassName="is-active">All Expenses</NavLink></li>
                <li><NavLink to="/edit" activeClassName="is-active">Edit</NavLink></li>
                <li><NavLink to="/help" activeClassName="is-active">Help</NavLink></li>
            </ul>
        </nav>
    </header>    
)

export default Header;