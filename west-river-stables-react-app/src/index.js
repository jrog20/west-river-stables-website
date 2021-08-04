import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store.js'

// import {
//   createStore,
//   applyMiddleware,
//   compose,
//   combineReducers
// } from 'redux';
// import thunk from 'redux-thunk';

// const currentUserReducer = (state = null, action) => {
//   switch (action.type) {
//     case "SET_CURRENT_USER":
//      return action.user
//     default:
//       return state
//   }
// }

// const rootReducer = combineReducers({
//   currentUser: currentUserReducer
// })

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
