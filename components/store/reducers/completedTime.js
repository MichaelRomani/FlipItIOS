//Actions
const COMPLETED_TIME = 'COMPLETED_TIME';

//Action Creators
export function completionTime(time) {
  const action = { type: COMPLETED_TIME, time };
  return action;
}

//Reducer
export default function reducer(state = '0', action) {

  switch (action.type) {

    case COMPLETED_TIME:
      state = action.time;
      return state;

    default:
      return state;
  }
}
