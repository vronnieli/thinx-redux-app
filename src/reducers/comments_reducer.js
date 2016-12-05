export default function commentsReducer(state=[], action) {
  switch ( action.type ) {
    case 'CREATE_COMMENT':
      return [...state, action.payload];
    default:
      return state;
  }
};
