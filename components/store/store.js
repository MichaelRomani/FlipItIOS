import { combineReducers, createStore } from 'redux';
import bool from './reducers/gridStore';
import dimensions from './reducers/setBoard';
import count from './reducers/counter';
import nowTime from './reducers/nowTime';
import completedTime from './reducers/completedTime';

const reducer = combineReducers({
  bool,
  dimensions,
  count,
  nowTime,
  completedTime
});

const store = createStore(reducer);

export default store;

export * from './reducers/gridStore';
export * from './reducers/setBoard';
export * from './reducers/counter';
export * from './reducers/nowTime';
export * from './reducers/completedTime';
