import React from 'react';
import {connect} from 'react-redux';


import { Grid, Col, Panel, Glyphicon, ListGroup, ListGroupItem } from 'react-bootstrap';
import MessagesNew from './messages_new'

function ConversationsShow (props) {

  function renderUsernames(user) {
    return user.username + " "
  };

  function renderMessages(message) {
    return (
      <ListGroupItem>{message.username}: {message.content}</ListGroupItem>
    )
  }

  const conversation = props.conversation;

  if (!conversation) {
    return <p>Loading...</p>
  };

  const title = <h2>{conversation.users.map(renderUsernames)}</h2>

  return (
    <Grid>
      <Col xs={12} md={8} >
      <Panel header={<h2><Glyphicon glyph="comment" /> {conversation.users.map(renderUsernames)}</h2>}>
        <ListGroup fill>
          {conversation.messages.map(renderMessages)}
          <MessagesNew conversationId={conversation.id}/>
        </ListGroup>
      </Panel>
      </Col>
    </Grid>
  );

};


function mapStateToProps(state, ownProps){
  const conversation = state.conversations.find(function(conversation) { return conversation.id == ownProps.params.id });
  return { conversation: conversation }
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(ConversationsShow)
