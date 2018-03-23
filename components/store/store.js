import { combineReducers, createStore } from 'redux';
import gridArray from './reducers/gridArray';
import dimensions from './reducers/setBoard';
import count from './reducers/counter';
import nowTime from './reducers/nowTime';
import completedTime from './reducers/completedTime';

const reducer = combineReducers({
  gridArray,
  dimensions,
  count,
  nowTime,
  completedTime
});

const store = createStore(reducer);

export default store;

export * from './reducers/gridArray';
export * from './reducers/setBoard';
export * from './reducers/counter';
export * from './reducers/nowTime';
export * from './reducers/completedTime';
