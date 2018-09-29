import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
// import './playground/redux-expensify';
import Store from './stores/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter,sortByAmount,sortByDate} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './playground/hoc';

const store = Store();



setTimeout(()=>{
    // store.dispatch(setTextFilter('bill'));
}, 3000)
const state = store.getState();
const VisibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(VisibleExpenses);




const root = document.getElementById('root');
// ReactDOM.render(<Hoc />, root);

const jsx = (
    <Provider store={store} >
        <AppRouter />
    </Provider>
    
);
ReactDOM.render(jsx, root);
registerServiceWorker();
