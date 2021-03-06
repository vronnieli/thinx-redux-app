import React from 'react';
import * as actions from '../actions/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import { Grid, Panel, FormGroup, ControlLabel, FormControl, Button, Glyphicon } from 'react-bootstrap';

class PostsNew extends React.Component {
  constructor(props) {
    super(props)
    this.state = {image: null}
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
    this.onFileSelectionHandler = this.onFileSelectionHandler.bind(this)
  };

  onSubmitHandler(event) {
    event.preventDefault()
    var title = event.target[0].value
    var content = event.target[1].value
    var image = this.state.image
    this.props.actions.createPost({post: {title: title, content: content, image: image}})
  };

  onFileSelectionHandler(event) {
    const reader = new FileReader();
    const file = event.target.files[0]
    reader.onload = function(event) {
      this.setState({image: event.target.result})
    }.bind(this)
    reader.readAsDataURL(file)
  }


  render() {
    return(
      <Grid>
        <Panel header="I THINX">
          <form onSubmit={this.onSubmitHandler} >
            <FormGroup>
              <ControlLabel>Title</ControlLabel>
              <FormControl type="text" placeholder="My Review of the Cheeky, How I Clean my Thinx.." />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Content</ControlLabel>
              <FormControl componentClass="textarea" placeholder="Share your thoughts" />
            </FormGroup>
            <FormGroup>
              <ControlLabel><Glyphicon glyph="paperclip" /> Image</ControlLabel>
              <FormControl type="file" onChange={this.onFileSelectionHandler}/>
            </FormGroup>
            <Button bsStyle="primary" bsSize="small" type="submit">Submit</Button>
          </form>
        </Panel>
      </Grid>
    )
  };

};

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions,dispatch)}
}

const componentCreator = connect(null, mapDispatchToProps)
export default componentCreator(PostsNew)
