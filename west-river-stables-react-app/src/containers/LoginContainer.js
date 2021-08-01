import React, { Component } from 'react';
import Login from '../components/Login';
import Logout from '../components/Logout';
import { connect } from 'react-redux';
import { getCurrentUser } from '../actions/currentUser.js'

class LoginContainer extends Component {
  constructor() {
    super()
    this.state = {
      currentUser: null,
      loginForm: {
        email: "",
        password: ""
      },
      secrets: []
    }
  }

  componentDidMount() {
    this.props.getCurrentUser()
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
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: userInfo
      })
    }
    fetch('http://localhost:3000/login', headers)
      .then(response => response.json())
      .then(resp => {
        if (resp.error) {
          // incorrect user
          alert("Invalid login. Please try again.")
        } else {
          // correct user login
          this.setState({
            currentUser: resp.user,
            // loginForm: {
            //   email: "",
            //   password: ""
            // }
          })
        }
      })
      .catch(console.log)
    }

  logout = event => {
    event.preventDefault()
    fetch("http://localhost:3000/logout", {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(resp => alert(resp.message))
    this.setState({
      currentUser: null,
      secrets: []
    })
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
        <Logout logout={this.logout}/>
      </div>
    );
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, { getCurrentUser: getCurrentUser })(LoginContainer);
