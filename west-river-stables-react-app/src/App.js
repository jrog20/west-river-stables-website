import React, { Component } from 'react';
import './App.css';
// import { connect } from 'react-redux';
import NavBar from './components/NavBar';
import HomeContainer from './containers/HomeContainer';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import LoginContainer from './containers/LoginContainer';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
// Switch allows only one route to show at a time
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={LoginContainer} 
          // handleOnChange={this.handleOnChange} handleOnSubmit={this.handleOnSubmit} email={this.state.loginForm.email} password={this.state.loginForm.password}
          />
          <Route component={NotFound} />
        </Switch>
        {/* Don't want this to render on the homepage
        <Login handleOnChange={this.handleOnChange} handleOnSubmit={this.handleOnSubmit} email={this.state.loginForm.email} password={this.state.loginForm.password}/> */}
        <Footer />
      </div>
    );
  }
}  

export default App;
