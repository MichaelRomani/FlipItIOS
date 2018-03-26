import { combineReducers, createStore } from 'redux';
import gridArray from './reducers/gridArray';
import dimensions from './reducers/setBoard';
import count from './reducers/counter';
import currentTime from './reducers/currentTime';
import completedTime from './reducers/completedTime';

const reducer = combineReducers({
  gridArray,
  dimensions,
  count,
  currentTime,
  completedTime
});

const store = createStore(reducer);

export default store;

export * from './reducers/gridArray';
export * from './reducers/setBoard';
export * from './reducers/counter';
export * from './reducers/currentTime';
export * from './reducers/completedTime';
