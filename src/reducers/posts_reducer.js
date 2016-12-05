import {browserHistory} from 'react-router';

export default function postsReducer(state=[], action) {
  switch ( action.type ) {
    case 'FETCH_POSTS':
      return action.payload;
    case 'CREATE_POST':
      browserHistory.push(`/posts/${action.payload.id}`)
      return [...state, action.payload];
    case 'UPDATE_POST':
      window.location.href = "/"
      return action.payload
    default:
      return state;
  }
};
