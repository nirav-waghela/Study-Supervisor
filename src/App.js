import React, { Component, Fragment } from 'react';
import './App.css';
import Home from './components/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './components/Login'
import { connect } from 'react-redux';
import { handleInitialData } from './actions/index'
import  LoadingBar  from 'react-redux-loading';
import Details from './components/Details';
import PrivateRoute from './PrivateRoute'
import Nav from './components/Nav'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <Nav />
            <Route path='/' exact component={Home} />
            <Route path='/login' component={Login} />
            <PrivateRoute exact path = '/details/:id' component={Details}/>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default connect()(App);
