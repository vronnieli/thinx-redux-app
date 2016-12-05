import { combineReducers } from 'redux';
import postsReducer from './posts_reducer';
import sessionsReducer from './sessions_reducer';
import conversationsReducer from './conversations_reducer';
import messagesReducer from './messages_reducer';
import commentsReducer from './comments_reducer';
import usersReducer from './users_reducer';

const rootReducer =  combineReducers({
  posts: postsReducer,
  sessions: sessionsReducer,
  conversations: conversationsReducer,
  messages: messagesReducer,
  comments: commentsReducer,
  users: usersReducer
});

export default rootReducer;

// const appReducer = combineReducers({
//   posts: postsReducer,
//   sessions: sessionsReducer,
//   conversations: conversationsReducer,
//   messages: messagesReducer,
//   comments: commentsReducer,
//   users: usersReducer
// })
//
// const rootReducer = (state, action) => {
//   if (action.type === 'LOG_OUT_SUCCESS') {
//     state = undefined
//   }
//   return appReducer(state, action)
// }
