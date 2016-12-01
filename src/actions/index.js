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
  debugger;
  const message = fetch(`${BASE_URL}/messages`,
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
