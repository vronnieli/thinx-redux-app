export default function messagesReducer(state=[], action) {
  switch ( action.type ) {
    case 'CREATE_MESSAGE':
      debugger;
      return [...state, action.payload];
    default:
      return state;
  }
};
