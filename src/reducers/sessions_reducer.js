import {browserHistory} from 'react-router';

export default function sessionReducer(state = !!sessionStorage.jwt, action) {
  switch(action.type) {
    case 'LOG_IN_SUCCESS':
      sessionStorage.setItem('jwt', action.payload.jwt)
      window.location.href = "/"
      return !!sessionStorage.jwt
    case 'LOG_OUT_SUCCESS':
      window.location.href = "/"
      return !!sessionStorage.jwt
    default:
      return state;
  }
}
