export default function postsReducer(state=[], action) {
  switch ( action.type ) {
    case 'FETCH_POSTS':
      return action.payload;
    case 'CREATE_COCKTAIL':
      debugger;
      return [...state, action.payload];
    default:
      return state;
  }
};