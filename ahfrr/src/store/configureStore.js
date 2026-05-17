import { configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { createReduxHistoryContext } from 'redux-first-history';
import ahfrrReducer from '../reducers/ahfrrReducer';
import logger from 'redux-logger'; // Ensure this is imported

// 1. Initialize the history context
const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({ 
  history: createBrowserHistory() 
});

const store = configureStore({
  // 2. Redux Toolkit calls combineReducers automatically if you pass an object
  reducer: {
    router: routerReducer, // Use the specialized router reducer, NOT the history object
    ahfrr: ahfrrReducer
  },
  
  // 3. Set your initial state
  preloadedState: window.__PRELOADED_STATE__ || {}, 

  // 4. Add the specialized routerMiddleware
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(routerMiddleware, logger),

  // DevTools and Enhancers are handled automatically; only add if you have custom ones
});

// 5. Create the history object to be used in your Router component
export const history = createReduxHistory(store);
export default store;