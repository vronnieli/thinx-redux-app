import React from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

class CommentsNew extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Form inline onSubmit={this.props.onSubmitHandler} >
        <FormGroup>
          <FormControl type="text" placeholder="Write your reply here..." />
          <Button bsStyle="warning" bsSize="small" type="submit">Reply</Button>
        </FormGroup>
      </Form>
    )
  }
};

export default CommentsNew
