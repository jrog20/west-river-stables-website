import React from 'react';
import { connect } from 'react-redux';
import Slider from '../components/Slider';

import Login from '../components/Login';
import Logout from '../components/Logout';
// import { getCurrentUser } from '../actions/currentUser.js';
// NEW
import { updateLoginForm } from "../actions/loginForm.js";
import { login, logout } from "../actions/currentUser.js"

// import { login, getCurrentUser } from "../actions/currentUser.js";
import rogerriding from '../assets/images/rogerriding.jpeg';

const LoginContainer = ({ loginFormData, updateLoginForm, login, history, currentUser }) => {

  // handleOnChange
  const handleOnChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
        ...loginFormData,
        [name]: value
    }
    updateLoginForm(updatedFormInfo)
    console.log(updatedFormInfo)
  }
  
  // handleOnSubmit
  const handleOnSubmit = event => {
    event.preventDefault()
    // Submit info from the form to the backend to authenticate
    // the user and, if valid, send the user back to the front end.
    // With the response, set the state.
    login(loginFormData, history)
  }
    console.log(loginFormData)

  return (
    <div>
      <h3> 
        { currentUser ? `Welcome, ${currentUser.username}!` : 'Not logged in'}
      </h3>
      { currentUser ? <Slider /> : 'Not logged in'}
      {/* <Login /> */}
      {/* COMMENTED OUT FOR NOW... */}
      <div className='background-image' style={{ backgroundImage: `url(${rogerriding})` }} alt="Login">
        <form onSubmit={handleOnSubmit}>
          <input 
            type="text" 
            name="email" 
            placeholder="email" 
            value={loginFormData.email}
            onChange={handleOnChange}
          /><br/>
          {/* change back to type='password' for production */}
          <input 
            type="text" 
            name="password" 
            placeholder="password" 
            value={loginFormData.password}
            onChange={handleOnChange}
          /><br/>
          <input 
            type="submit" 
            value="Login"
          />
        </form>
      </div>
      {
        currentUser? 
        <Logout logout={logout}/> 
        :
        // <p>This is where the logout button would go</p>
        <Login 
          handleOnChange={handleOnChange} 
          handleOnSubmit={handleOnSubmit} 
          email={loginFormData.email} 
          password={loginFormData.password}
        />
      }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    loginFormData: state.loginForm
  }
}

export default connect(mapStateToProps, { updateLoginForm, login })(LoginContainer);


// Added - can remove all secrets after testing complete
// import Secrets from '../components/Secrets.js';

// class LoginContainer extends Component {
//   constructor() {
//     super()
//     this.state = {
//       // replace this line with mapStateToProps
//       currentUser: null,
//       loginForm: {
//         email: "",
//         password: ""
//       },
//       secrets: []
//     }
//   }

  // componentDidMount() {
  //   this.props.getCurrentUser()
  // }

  // handleOnChange = event => {
  //   const { name, value } = event.target
  //   this.setState({
  //     loginForm: {
  //       ...this.state.loginForm,
  //       [name]: value
  //     }
  //   })
  // }

  // handleOnSubmit = event => {
  //   event.preventDefault()
  //   // Submit info from the form to the backend to authenticate
  //   // the user and, if valid, send the user back to the front end.
  //   // With the response, set the state.
    
    
  //   const userInfo = this.state.loginForm
  //   const headers = {
  //     method: 'POST',
  //     credentials: 'include',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       user: userInfo
  //     })
  //   }
  //   fetch('http://localhost:3000/login', headers)
  //     .then(response => response.json())
  //     .then(resp => {
  //       console.log(resp)
  //       console.log(resp.user)
  //       if (resp.error) {
  //         // incorrect user
  //         alert("Invalid login. Please try again.")
  //       } else {
  //         // correct user login
  //         this.setState({
  //           currentUser: resp.user,
  //           loginForm: {
  //             email: "",
  //             password: ""
  //           }
  //         })
  //       }
  //     })
  //     .catch(console.log)
  //   }

  // logout = event => {
  //   event.preventDefault()
  //   fetch("http://localhost:3000/logout", {
  //     method: "DELETE",
  //     credentials: "include",
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   })
  //     .then(response => response.json())
  //     .then(resp => alert(resp.message))
  //   this.setState({
  //     currentUser: null,
  //     secrets: []
  //   })
  // }

  // Added getSecrets
  // getSecrets = () => {
  //   fetch("http://localhost:3000/secrets", {
  //     credentials: "include",
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   })
  //     .then(response => response.json())
  //     .then(secrets => {
  //       if (secrets.error) {
  //         alert("Not authorized for those secrets")
  //       } else {
  //         // success
  //         this.setState({
  //           secrets
  //         })
  //       }
  //     })
  //     .catch(console.log)
  // }

  // render() {
  //   // Need to change this from state to props, but something is not connected correctly
  //   // const { currentUser } = this.state
  //   const { currentUser } = this.props
  //   console.log(this.props)
  //   return (
  //     <div>
  //       <h3>
  //         { currentUser ? `Welcome, ${currentUser.username}!` : 'Not logged in'}
  //       </h3>
  //       {
  //         currentUser? 
  //         <Logout logout={this.logout}/> :
  //         <Login 
  //           handleOnChange={this.handleOnChange} 
  //           handleOnSubmit={this.handleOnSubmit} 
  //           email={this.state.loginForm.email} 
  //           password={this.state.loginForm.password}
  //         />
  //       }
  //       {/* Added for testing/debugging */}
  //       {/* <button onClick={this.getSecrets}>Show User's Secrets</button> */}
  //       {/* <Secrets secrets={this.state.secrets}/> */}
  //     </div>
  //   );
  // }
// }

// const mapStateToProps = ({ currentUser }) => {
//   console.log(currentUser)
//   return {
//     currentUser
//   }
// }

// export default connect(mapStateToProps, { getCurrentUser })(LoginContainer);
