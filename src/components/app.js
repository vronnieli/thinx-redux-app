import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import {bindActionCreators} from 'redux';

import NavBar from './nav_bar';

class App extends Component {
  constructor(props) {
    super(props)
    this.onLogInHandler = this.onLogInHandler.bind(this);
    this.onLogOutHandler = this.onLogOutHandler.bind(this);
    this.onSignUpHandler = this.onSignUpHandler.bind(this);
  };

  onLogInHandler(event) {
    event.preventDefault();
    const username = event.target[0].value
    const password = event.target[1].value
    this.props.actions.logInUser({credentials: {username: username, password: password}})
    event.target[0].value = ""
    event.target[1].value = ""
  }

  onSignUpHandler(event) {
    event.preventDefault();
    const username = event.target[0].value
    const password = event.target[1].value
    this.props.actions.createUser({user: {username: username, password: password}})
    event.target[0].value = ""
    event.target[1].value = ""
  }

  onLogOutHandler(event) {
    event.preventDefault();
    this.props.actions.logOutUser();
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, {
        onLogInHandler: this.onLogInHandler,
        onSignUpHandler: this.onSignUpHandler
      })
    );
    return (
      <div>
        <NavBar onLogOutHandler={this.onLogOutHandler}/>
        {childrenWithProps}
      </div>
    )
  };

};


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

const componentCreator = connect(null, mapDispatchToProps);
export default componentCreator(App);
