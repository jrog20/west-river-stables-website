export const setCurrentUser = ({user}) => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}

//async action creators
export const getCurrentUser = userCredentials => {
  return dispatch => {
    return fetch("http://localhost:3000/get_current_user", {
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then(resp => {
      if (resp.error) {
        alert(resp.error)
      } else {
        dispatch(setCurrentUser(resp))
      }
    })
    .catch(console.log)
  }
}
