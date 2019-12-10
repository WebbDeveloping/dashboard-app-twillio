import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Testimonies from './Pages/Testimonies/Testimonies';
import HomePage from './Pages/HomePage/HomePage';
import LearnMore from './Pages/LearnMore/LearnMore';
import ContactForm from './Pages/Contact/ContactForm';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import Dashboard from './Pages/Dashboard/Dashboard';
import Orders from './Pages/Dashboard/Orders/Orders';
import TransactionCard from './Pages/Dashboard/TransactionCard/TransactionCard';
import ActivityCard from './Pages/Dashboard/ActivityCard/ActivityCard';

export default (
  <Switch>
    {/* <Route component={Home} exact path="/" /> */}
    <Route component={Testimonies} path='/Testimonies' />
    <Route component={Login} path='/Login' />
    <Route component={LearnMore} path='/LearnMore' />
    <Route component={ContactForm} path='/Contact' />
    <Route component={Register} path='/Register' />
    <Route component={Dashboard} path='/Dashboard' />
    <Route component={Orders} path='/Orders' />
    <Route component={TransactionCard} path='/Transactions' />
    <Route component={ActivityCard} path='/ActivityCard' />
    <Route component={HomePage} exact path='/' />
  </Switch>
);
