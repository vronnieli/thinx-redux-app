import React from 'react';
import * as actions from '../actions/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import { Grid, Panel, FormGroup, ControlLabel, FormControl, Button, Glyphicon } from 'react-bootstrap';

class PostsEdit extends React.Component {
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
    var postId = this.props.post.id
    this.props.actions.updatePost({post: {id: postId, title: title, content: content, image: image}})
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
    var post =  this.props.post

    return(
      <Grid>
        <Panel header="I THINX">
          <form onSubmit={this.onSubmitHandler} >
            <FormGroup>
              <ControlLabel>Title</ControlLabel>
              <FormControl type="text" placeholder={post.title} />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Content</ControlLabel>
              <FormControl componentClass="textarea" placeholder={post.content} />
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

function mapStateToProps(state, ownProps){
  const post = state.posts.find(function(post) { return post.id == ownProps.params.id });
  return { post: post }
}
function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions,dispatch)}
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps)
export default componentCreator(PostsEdit)
