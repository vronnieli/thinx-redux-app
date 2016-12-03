export default function conversationsReducer(state=[], action) {
  switch ( action.type ) {
    case 'FETCH_CONVERSATIONS':
      return action.payload;
    case 'CREATE_CONVERSATION':
      return [...state, action.payload];
    default:
      return state;
  }
};
