import React from 'react';
import {connect} from 'react-redux';

import { Grid, Col, ListGroup, ListGroupItem, Badge } from 'react-bootstrap';

function PostsIndex (props) {

  const renderUsernames = (user) => {
    return user.username + ","
  }

  const renderConversations = (conversation) => {
    return (
      <ListGroupItem href={'/conversations/' + conversation.id}>
        <h5>{conversation.users.map(renderUsernames)} <Badge>{conversation.messages.length}</Badge></h5>
      </ListGroupItem>
    )
  };

  return (
    <Grid>
      <Col xs={12} md={3} >
        <ListGroup>
          {props.conversations.map(renderConversations)}
        </ListGroup>
      </Col>
      {props.children}
    </Grid>
  )

};

function mapStateToProps(state){
  return {
    conversations: state.conversations
  };
};

const componentCreator = connect(mapStateToProps);
export default componentCreator(PostsIndex);
