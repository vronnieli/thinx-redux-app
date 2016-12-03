import {browserHistory} from 'react-router';

export default function commentsReducer(state=[], action) {
  switch ( action.type ) {
    case 'CREATE_COMMENT':
      debugger;
      browserHistory.push(`/posts/${action.payload.post_id}`)
      return [...state, action.payload];
    default:
      return state;
  }
};
