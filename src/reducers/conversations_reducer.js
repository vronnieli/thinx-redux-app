import {browserHistory} from 'react-router';

export default function conversationsReducer(state=[], action) {
  switch ( action.type ) {
    case 'FETCH_CONVERSATIONS':
      return action.payload;
    case 'CREATE_CONVERSATION':
      browserHistory.push(`/conversations/${action.payload.id}`)
      return [...state, action.payload];
    default:
      return state;
  }
};
