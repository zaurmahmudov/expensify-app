import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddExpenseCompenent from '../components/AddExpenseCompenent';
import EditComponent from '../components/EditComponent';
import ExpenseDashboard from '../components/ExpenseDashboard';
import Header from '../components/Header';
import HelpComponent from '../components/HelpComponent';
import NotFoundPage from '../components/NotFoundPage';





const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path="/" exact={true} component={ExpenseDashboard}/>
            <Route path="/create" exact={true} component={AddExpenseCompenent} />
            <Route path="/edit/:id"  component={EditComponent} />
            <Route path="/help" exact={true} component={HelpComponent} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>
        
    </BrowserRouter>
);
export default AppRouter;