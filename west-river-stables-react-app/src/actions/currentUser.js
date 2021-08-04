// synchronous action creators
export const setCurrentUser = ({user}) => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}

export const clearCurrentUser = () => {
  return {
    type: "CLEAR_CURRENT_USER"
  }
}

// Something here may be preventing keeping login when refreshing page? Or somewhere in sessions controller?

//async action creators
export const getCurrentUser = () => {
  return dispatch => {
    return fetch("http://localhost:3000/get_current_user", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then(resp => {
      if (resp.error) {
        alert(resp.error)
      } else {
        console.log(resp)
        dispatch(setCurrentUser(resp))
      }
    })
    .catch(console.log)
  }
}
