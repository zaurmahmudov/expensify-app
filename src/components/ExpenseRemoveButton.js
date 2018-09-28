import React from 'react'
import { connect } from 'react-redux'
import {removeExpense} from '../actions/expenses'


const OurRemoveButton = (props) => (
    <button id={props.id} onClick={ (e) => (
        props.dispatch(removeExpense(e.target.id))
    )}>Remove</button>
)

export default connect()(OurRemoveButton);