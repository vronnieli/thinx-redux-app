import React from 'react';

import { Grid, Col, Panel, Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

function LogInForm (props) {

  return(
    <Grid>
      <Col xs={12} md={3} >
        <Panel header="Sign In">
          <Form onSubmit={props.onLogInHandler} href="/">
            <FormGroup>
              <ControlLabel>Username</ControlLabel>
              <FormControl type="text" placeholder="Username" />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Password</ControlLabel>
              <FormControl type="password" placeholder="Password" />
            </FormGroup>
            <FormGroup>
              <Button bsStyle="primary" bsSize="small" type="submit" >Sign In</Button>
            </FormGroup>
          </Form>
        </Panel>
      </Col>
    </Grid>
  )
};

export default LogInForm;
