import React, { Component } from 'react';
import {connect} from 'react-redux';

import NavBar from './nav_bar';
//import PostsIndex from './posts_index'

//import {Link} from 'react-router';
//import * as actions from '../actions/index';
//import {bindActionCreators} from 'redux';


class App extends Component {
  constructor(props) {
    super(props)
  };

  render() {
    return (
      <div>
        <NavBar />
        {this.props.children}
      </div>
    )
  };

};

function mapStateToProps(state){
  return {
    session: state.session
  };
};

const componentCreator = connect(mapStateToProps);
export default componentCreator(App);
