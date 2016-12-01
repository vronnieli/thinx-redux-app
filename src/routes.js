import React from 'react';
import { Route } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index'
import PostsNew from './components/posts_new'
import PostsShow from './components/posts_show'
import ConversationsIndex from './components/conversations_index'
import ConversationsShow from './components/conversations_show'
// import ItinerariesNew from './components/itineraries_new'
// import LoginForm from './components/login_form'
// import SignUpForm from './components/sign_up_form'
// import ItinerariesUpdate from './components/itineraries_update'
// <Route path="/login" component={LoginForm} />
// <Route path="/signup" component={SignUpForm} />
// <Route path="/posts" component={PostsIndex} >
//   <Route path="/posts/new" component={PostsNew} onEnter={requireAuth} />
//
//   <Route path="/itineraries/:id/update" component={PostsUpdate} />
// </Route>
// <Route path="/posts/:id" component={PostsShow} >
//   <Route path="/comments/new" component={CommentsNew} onEnter={requireAuth} />
// </Route>

export default (
  <Route path="/" component={App} >
    <Route path="/posts" component={ PostsIndex } />
    <Route path="/posts/new" component={ PostsNew } />
    <Route path="/posts/:id" component={ PostsShow } />
    <Route path="/conversations" component={ ConversationsIndex } >
      <Route path="/conversations/:id" component={ ConversationsShow } />
    </Route>
  </Route>
)

function requireAuth(nextState, replace) {
  if (!sessionStorage.jwt){
    replace({
      pathname: '/login',
      // state: {
      //   nextPathname: nextState.location.pathname
      // }
    })
  }
}
