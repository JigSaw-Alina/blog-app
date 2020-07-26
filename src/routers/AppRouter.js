import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import BlogAppDashboard from '../components/BlogAppDashboard';
import AddBlogPage from  '../components/AddBlogPage';
import EditBlogPage from '../components/EditBlogPage';
import Header from '../components/Header';


const AppRouter = () => (
  <BrowserRouter>
   <div>
    <Header />
    <Switch>
      <Route path="/" component={BlogAppDashboard} exact={true} />
      <Route path="/create" component={AddBlogPage} />
      <Route path="/edit/:id" component={EditBlogPage} />
    </Switch>
   </div>
  </BrowserRouter>
);

export default AppRouter;




