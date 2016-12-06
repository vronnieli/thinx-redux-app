import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index'
import PostsNew from './components/posts_new'
import PostsShow from './components/posts_show'
import ConversationsIndex from './components/conversations_index'
import ConversationsShow from './components/conversations_show'
import LogInForm from './components/login_form'
import SignUpForm from './components/signup_form'
import PostsEdit from './components/posts_edit'

export default (
  <Route path="/" component={App} >
    <IndexRoute component={ PostsIndex } />
    <Route path="/login" component={ LogInForm } />
    <Route path="/signup" component={ SignUpForm} />
    <Route path="/posts/new" component={ PostsNew } onEnter={requireAuth} />
    <Route path="/posts/:id" component={ PostsShow } />
    <Route path="/posts/:id/edit" component={ PostsEdit } onEnter={requireAuth} />
    <Route path="/conversations" component={ ConversationsIndex } onEnter={requireAuth} >
      <Route path="/conversations/:id" component={ ConversationsShow } onEnter={requireAuth} />
    </Route>
  </Route>
)

function requireAuth(nextState, replace) {
  if (!sessionStorage.jwt || (sessionStorage.jwt == "undefined")){
    replace('/login')
  }
}
