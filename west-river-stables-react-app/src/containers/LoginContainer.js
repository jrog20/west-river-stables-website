import React, { Component } from 'react';
import Login from '../components/Login';
import Logout from '../components/Logout';
import { connect } from 'react-redux';
import { getCurrentUser } from '../actions/currentUser.js';
// Added
import Secrets from '../components/Secrets.js';

class LoginContainer extends Component {
  constructor() {
    super()
    this.state = {
      // replace this line with mapStateToProps
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
        console.log(resp)
        console.log(resp.user)
        if (resp.error) {
          // incorrect user
          alert("Invalid login. Please try again.")
        } else {
          // correct user login
          this.setState({
            currentUser: resp.user,
            loginForm: {
              email: "",
              password: ""
            }
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

  // Added getSecrets
  getSecrets = () => {
    fetch("http://localhost:3000/secrets", {
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(secrets => {
        if (secrets.error) {
          alert("Not authorized for those secrets")
        } else {
          // success
          this.setState({
            secrets
          })
        }
      })
      .catch(console.log)
  }

  render() {
    // Need to change this from state to props, but something is not connected correctly
    // const { currentUser } = this.state
    const { currentUser } = this.props
    console.log(this.props)
    return (
      <div>
        <h3>
          { currentUser ? `Welcome, ${currentUser.username}!` : 'Not logged in'}
        </h3>
        {
          currentUser? 
          <Logout logout={this.logout}/> :
          <Login 
            handleOnChange={this.handleOnChange} 
            handleOnSubmit={this.handleOnSubmit} 
            email={this.state.loginForm.email} 
            password={this.state.loginForm.password}
          />
        }
        {/* Added for testing/debugging */}
        <button onClick={this.getSecrets}>Show User's Secrets</button>
        <Secrets secrets={this.state.secrets}/>
      </div>
    );
  }
}

const mapStateToProps = ({ currentUser }) => {
  console.log(currentUser)
  return {
    currentUser
  }
}

export default connect(mapStateToProps, { getCurrentUser: getCurrentUser })(LoginContainer);
