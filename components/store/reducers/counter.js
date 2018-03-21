//Actions
const COUNTER = 'COUNTER';

//Action Creators
export function setCount(num) {
  console.log('num', num)
  const action = { type: COUNTER, num };
  return action;
}

//Reducer
export default function reducer(state = 0, action) {

  switch (action.type) {

    case COUNTER:
      state = action.num;
      return state;

    default:
      return state;
  }
}
