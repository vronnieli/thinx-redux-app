//export const BASE_URL = 'https://thinx-challenge-api.herokuapp.com/api/v1/'
export const BASE_URL = 'http://localhost:3000/api/v1/'

export function fetchPosts(){
  const posts = fetch(`${BASE_URL}posts`).then((response) => {return response.json()}).then((postsPayload) => {return postsPayload})
  return {
    type: 'FETCH_POSTS',
    payload: posts
  }
};

export function fetchConversations(){
  const conversations = fetch(`${BASE_URL}conversations`).then((response) => {return response.json()}).then((conversationsPayload) => {return conversationsPayload})
  return {
    type: 'FETCH_CONVERSATIONS',
    payload: conversations
  }
};

export function fetchUsers(){
  const users = fetch(`${BASE_URL}users`).then((response) => {return response.json()}).then((usersPayload) => {return usersPayload})
  return {
    type: 'FETCH_USERS',
    payload: users
  }
};

export function createPost(params){
  debugger;
  const post = fetch(`${BASE_URL}/cocktails`,
    {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then((response) => {return response.json()}).then((postPayload) => {return postPayload});

  return {
    type: 'CREATE_POST',
    payload: post
  }
}

export function createMessage(params){
  const message = fetch(`${BASE_URL}messages`,
    {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then((response) => {return response.json()}).then((messagePayload) => {return messagePayload});

  return {
    type: 'CREATE_MESSAGE',
    payload: message
  }
}

export function createComment(params){
  const comment = fetch(`${BASE_URL}comments`,
    {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then((response) => {return response.json()}).then((commentPayload) => {return commentPayload});

  return {
    type: 'CREATE_COMMENT',
    payload: comment
  }
}

export function createConversation(params){
  const conversation = fetch(`${BASE_URL}conversations`,
    {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then((response) => {return response.json()}).then((conversationPayload) => {return conversationPayload});

  return {
    type: 'CREATE_CONVERSATION',
    payload: conversation
  }
}
