import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import user from './reducers/user';

const reducer = combineReducers({ user });
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);

// Save the current store state to localStorage whenever it changes.
// store.subscribe(() => {
//   localStorage.state = JSON.stringify(store.getState())
// });

const store = createStore(reducer, middleware);
export default store;

export * from './reducers/user';
