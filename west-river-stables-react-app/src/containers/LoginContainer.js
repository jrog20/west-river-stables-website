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
    console.log('doing nothing')
  }

  render() {
    return (
      <div>
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