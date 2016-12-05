export default function usersReducer(state=[], action) {
  switch ( action.type ) {
    case 'FETCH_USERS':
      return action.payload;
    case 'CREATE_USER':
      sessionStorage.setItem('jwt', action.payload.jwt)
      window.location.href = "/"
      return [...state, action.payload];
    default:
      return state;
  }
};
