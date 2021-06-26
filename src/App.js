import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import BlogDetails from './component/BlogDetails/BlogDetails';
import AddBlog from './component/Dashboard/AddBlog/AddBlog';
import Dashboard from './component/Dashboard/Dashboard';
import ManageBlog from './component/Dashboard/ManageBlog/ManageBlog';
import Home from './component/Home/Home';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/blog/:id">
              <BlogDetails />
            </Route>
            <Route path="/addBlog">
              <AddBlog />
            </Route>
            <Route path="/manageBlog">
              <ManageBlog />
            </Route>
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
