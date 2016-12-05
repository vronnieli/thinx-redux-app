import React from 'react';

import { Grid, Col, Panel, Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

function SignUpForm (props) {

  return(
    <Grid>
      <Col xs={12} md={3} >
        <Panel header="Sign Up">
          <Form onSubmit={props.onSignUpHandler} href="/">
            <FormGroup>
              <ControlLabel>Username</ControlLabel>
              <FormControl type="text" placeholder="Username" />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Password</ControlLabel>
              <FormControl type="password" placeholder="Password" />
            </FormGroup>
            <FormGroup>
              <Button bsStyle="primary" bsSize="small" type="submit">Sign Up</Button>
            </FormGroup>
          </Form>
        </Panel>
      </Col>
    </Grid>
  )
};

export default SignUpForm;
