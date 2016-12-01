import { combineReducers } from 'redux';
import postsReducer from './posts_reducer';
import sessionsReducer from './sessions_reducer';
import conversationsReducer from './conversations_reducer';
import messagesReducer from './messages_reducer';

const rootReducer =  combineReducers({
  posts: postsReducer,
  sessions: sessionsReducer,
  conversations: conversationsReducer,
  messages: messagesReducer
});

export default rootReducer;
