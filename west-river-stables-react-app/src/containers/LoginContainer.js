import React, { Component } from 'react';
import Login from '../components/Login';

// import { connect } from 'react-redux'

class LoginContainer extends Component {
  // Added for userlogin - Is it good practice to have this here, 
  // or should it be in login component?
  constructor() {
    super()
    this.state = {
      currentUser: null,
      loginForm: {
        email: "",
        password: ""
      }
    }
  }

  handleOnChange = event => {
    const { name, value } = event.target
    this.setState({
      loginForm: {
        ...this.state.loginForm,
        [name]: value
      }
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    // Submit info from the form to the backend to authenticate
    // the user and, if valid, send the user back to the front end.
    // With the response, set the state.
    const userInfo = this.state.loginForm
    const headers = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: userInfo
      })
    }

    fetch('http://localhost:3000/login', headers)
      .then(response => response.json())
      .then(userJSON => {
        if (userJSON.error) {
          // incorrect user
          alert("Invalid login. Please try again.")
        } else {
          // correct user login
          this.setState({
            currentUser: userJSON
          })
        }
      })
      .catch(console.log)
  }

  render() {
    const { currentUser } = this.state
    return (
      <div>
        <h3>
          { currentUser ? `Welcome, ${currentUser.username}!` : 'Not logged in'}
        </h3>
        <Login 
          handleOnChange={this.handleOnChange} 
          handleOnSubmit={this.handleOnSubmit} 
          email={this.state.loginForm.email} 
          password={this.state.loginForm.password}
        />
      </div>
    );
  }
}

export default LoginContainer
// export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)