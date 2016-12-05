import React from 'react';
import * as actions from '../actions/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import { Grid, Row, Col, Well, ListGroup, ListGroupItem, Badge, Form, FormGroup, FormControl, Button } from 'react-bootstrap';

class ConversationsIndex extends React.Component {
  constructor(props){
    super(props);
    this.renderUsernames = this.renderUsernames.bind(this)
    this.renderConversations = this.renderConversations.bind(this)
    this.renderAllUsernames = this.renderAllUsernames.bind(this)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  };

  onSubmitHandler(event) {
    event.preventDefault()
    const userId = event.target[0].value
    this.props.actions.createConversation({conversation: {user_id: userId}})
  }

  renderAllUsernames(user) {
    return <option value={user.id}>{user.username}</option>
  }

  renderUsernames(user) {
    return user.username + " "
  }

  renderConversations(conversation) {
    return (
      <Link to={'/conversations/' + conversation.id} >
        <ListGroupItem>
          <h5>{conversation.users.map(this.renderUsernames)} <Badge>{conversation.messages.length}</Badge></h5>
        </ListGroupItem>
      </Link>
    )
  };


  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} md={3} >
            <Well>
              <Form inline onSubmit={this.onSubmitHandler} >
                <FormGroup>
                  <strong>Chat with </strong>
                  <FormControl componentClass="select" placeholder="Select User" >
                    {this.props.users.map(this.renderAllUsernames)}
                  </FormControl>
                  <Button bsStyle="primary" bsSize="small" type="submit">Start</Button>
                </FormGroup>
              </Form>
            </Well>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={3} >
            <ListGroup>
              {this.props.conversations.map(this.renderConversations)}
            </ListGroup>
          </Col>
          {this.props.children}
        </Row>
      </Grid>
    )
  }

};

function mapStateToProps(state){
  return {
    conversations: state.conversations,
    users: state.users
  };
};

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps)
export default componentCreator(ConversationsIndex)
