import { bindActionCreators } from 'redux';
import csrfFetch from './csrf';
import merge from 'lodash/merge';

// ACTION CONSTANTS
const RECEIVE_BENCHES = 'benches/RECEIVE_BENCHES';
const RECEIVE_BENCH = 'benches/RECEIVE_BENCH';

// ACTION CREATORS
export const receiveBenches = benches => {
  return {
    type: RECEIVE_BENCHES,
    benches
  }
};

export const receiveBench = bench => {
  return {
    type: RECEIVE_BENCH,
    bench
  }
};


// THUNK ACTION CREATORS
export const fetchBenches = () => async dispatch => {
  const res = await csrfFetch('/api/benches');

  if (res.ok) {
    const benches = await res.json();
    dispatch(receiveBenches(benches));
  } else {
    console.log("errorrrrrr in fetchBenches thunk action creator")
  }
}

export const fetchBench = (benchId) => async dispatch => {
  const res = await csrfFetch(`/api/benches/${benchId}`);

  if (res.ok) {
    const bench = await res.json();
    dispatch(receiveBench(bench));
  } else {
    console.log("errorrrrrr in fetchBenches thunk action creator")
  }
}

export const createBench = (benchData) => async dispatch => {
  console.log('creating bench')
  const res = await csrfFetch('/api/benches/', {
    method: "POST",
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify(benchData)
  });

  if (res.ok) {
    const bench = await res.json();
    dispatch(receiveBench(bench));
  } else {
    console.log("errorrrrrr in fetchBenches thunk action creator")
  }
}




const benchesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_BENCHES:
      return { ...action.benches }
    case RECEIVE_BENCH:
      console.log(action)
      // let newState = {...state}
      // newState[action.bench.id] = action.bench;
      // POTENTIAL BUG - could just be action.bench
      return { ...state, ...action.bench};
    default:
      return state
  }
}

export default benchesReducer;




