import React from 'react';
import * as actions from '../actions/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import { ListGroupItem, Form, FormGroup, FormControl, Button } from 'react-bootstrap';


class MessagesNew extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newMessage: false
    };
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  };

  onSubmitHandler(event) {
    event.preventDefault()
    const content = event.target[0].value
    const conversationId = this.props.conversationId
    this.props.actions.createMessage({message: {content: content, user_id: 2, conversation_id: conversationId}})
    event.target[0].value = ""
    this.setState({
      newMessage: true
    })
  };

  render() {
    return (
      <ListGroupItem>
        <Form inline onSubmit={this.onSubmitHandler} >
          <FormGroup>
            <FormControl type="text" placeholder="Message here..." />
            <Button bsStyle="warning" bsSize="small" type="submit">Send</Button>
          </FormGroup>
        </Form>
      </ListGroupItem>
    )
  };

};


function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(null, mapDispatchToProps)
export default componentCreator(MessagesNew)
