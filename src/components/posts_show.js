import React from 'react';
import * as actions from '../actions/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import { Grid, Row, Panel, Col, Image, Media, Button, Glyphicon, Form, FormGroup, FormControl, Thumbnail } from 'react-bootstrap';
import CommentsNew from './comments_new';


class PostsShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      commentId: null
    };
    this.renderComments = this.renderComments.bind(this)
    this.renderSubComments = this.renderSubComments.bind(this)
    this.renderReplyBox = this.renderReplyBox.bind(this)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
    this.datetimeChecker = this.datetimeChecker.bind(this)
  };

  onSubmitHandler(event) {
    event.preventDefault()
    const comment = event.target[0].value
    const postId = this.props.post.id
    const parentCommentId = this.state.commentId
    this.props.actions.createComment({comment: {comment_text: comment, post_id: postId, parent_comment_id : parentCommentId}})
    event.target[0].value = ""
    this.setState({
      commentId: null
    });
    this.props.actions.fetchPosts()
  }

  renderReplyBox(event) {
    event.preventDefault()
    this.setState({
      commentId: event.target.id
    });
  };

  renderSubComments(subcomment) {
    if (subcomment.sub_comments.length > 0) {
       var subComments = subcomment.sub_comments.map(this.renderSubComments)
    }
    if (!!sessionStorage.jwt && this.datetimeChecker()) {
      var replyArrow = <Glyphicon glyph="share-alt" id={subcomment.id} onClick={this.renderReplyBox}/>
    }
    if (subcomment) {
      return (
        <Media>
          <Media.Left>
            {subcomment.username} says:
          </Media.Left>
          <Media.Body>
            <Media.Heading>{subcomment.comment_text} {replyArrow}</Media.Heading>
            <p>posted {subcomment.created_at_datetime}</p>
            {this.state.commentId == subcomment.id ? <CommentsNew onSubmitHandler={this.onSubmitHandler} /> : null }
            {subcomment.sub_comments.map(this.renderSubComments)}
          </Media.Body>
        </Media>
      )
    }
  }

  renderComments(comment) {
    if (!!sessionStorage.jwt && this.datetimeChecker()) {
      var replyArrow = <Glyphicon glyph="share-alt" id={comment.id} onClick={this.renderReplyBox}/>
    }
    if (!comment.parent_comment_id) {
      return (
        <Media>
          <Media.Left>
            {comment.username} says:
          </Media.Left>
          <Media.Body>
            <Media.Heading>{comment.comment_text} {replyArrow}</Media.Heading>
            <p>posted {comment.created_at_datetime}</p>
            {this.state.commentId == comment.id ? <CommentsNew onSubmitHandler={this.onSubmitHandler} /> : null }
            {comment.sub_comments.map(this.renderSubComments)}
          </Media.Body>
        </Media>
      )
    }
  };

  datetimeChecker() {
    var post = this.props.post;
    var currentDatetime = new Date().toISOString()
    var postDatetimePlusHour = post.created_at.slice(0,12) + String(Number(post.created_at[12]) + 1) + post.created_at.slice(13)
    return currentDatetime < postDatetimePlusHour
  }

  render() {
    var post = this.props.post;

    if (!post) {
      return <Grid>Loading...</Grid>
    };

    var title = <h2>{post.title}</h2>

    if (!!sessionStorage.jwt && this.datetimeChecker()) {
      var editButton = <Link to={"/posts/" + post.id + "/edit"}><Button bsStyle="primary" bsSize="small" >Edit</Button></Link>
      var newComment = <div><CommentsNew onSubmitHandler={this.onSubmitHandler} /> or click <Glyphicon glyph="share-alt" /> below</div>
    } else if (!sessionStorage.jwt) {
      var logInButton = <Button bsStyle="primary" bsSize="small" href="/login" style={{maxWidth: 400, margin: '0 auto 20px'}}>Leave a Reply</Button>
    }

    return (
      <Grid>
        <Row>
          <Col xs={12} md={8} >
            <Panel header={title}>
              <p>{post.content}</p>
              <p>by {post.username}</p>
              <p>{editButton}</p>
            </Panel>
          </Col>
          <Col xs={12} md={3} >
            <Thumbnail src={"https://s3.us-east-2.amazonaws.com/" + post.image_url_thumb} />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={8} >
            {newComment}
          </Col>
        </Row>
        <br ></br>
        <Row>
          <Col xs={12} md={8} >
            <Panel>
              <Media.List>
                {post.comments.map(this.renderComments)}
              </Media.List>
            </Panel>
          </Col>
        </Row>
        <Row>
          {logInButton}
        </Row>
      </Grid>
    );
  };

};

function mapStateToProps(state, ownProps){
  const post = state.posts.find(function(post) { return post.id == ownProps.params.id });
  return { post: post }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps)
export default componentCreator(PostsShow)
