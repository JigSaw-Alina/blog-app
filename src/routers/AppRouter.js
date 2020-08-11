import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import * as createHistory from "history";
import BlogAppDashboard from '../components/BlogAppDashboard';
import BlogPost from '../components/BlogPost';
import AddBlogPage from  '../components/AddBlogPage';
import EditBlogPage from '../components/EditBlogPage';
import  LoginPage  from '../components/LoginPage'
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


export const history = createHistory.createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
   <div>
    <Switch>
      <PublicRoute path="/" component={LoginPage} exact={true} />
      <PrivateRoute path="/dashboard" component={BlogAppDashboard} />
      <PrivateRoute path="/post" component={BlogPost} />
      <PrivateRoute path="/create" component={AddBlogPage} />
      <PrivateRoute path="/edit/:id" component={EditBlogPage} />
    </Switch>
   </div>
  </Router>
);

export default AppRouter;




