//Actions
const CURRENT_TIME = 'CURRENT_TIME';

//Action Creators
export function setTime(time) {
  const action = { type: CURRENT_TIME, time };
  return action;
}

//Reducer
export default function reducer(state = 0, action) {
  let newState = state;

  switch (action.type) {

    case CURRENT_TIME:
      newState = action.time;
      return newState;

    default:
      return newState;
  }
}
