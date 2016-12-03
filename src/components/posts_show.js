import React from 'react';
import * as actions from '../actions/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import { Grid, Row, Panel, Col, Image, Media, Button, Glyphicon, Form, FormGroup, FormControl } from 'react-bootstrap';
import CommentsNew from './comments_new';
import {Link} from 'react-router';

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
  };

  onSubmitHandler(event) {
    event.preventDefault()
    const comment = event.target[0].value
    const postId = this.props.post.id
    const parentCommentId = this.state.commentId
    this.props.actions.createComment({comment: {comment_text: comment, post_id: postId, user_id: 2, parent_comment_id : parentCommentId}})
    this.setState({
      commentId: null
    });
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
    if (subcomment) {
      return (
        <Media>
          <Media.Left>
            {subcomment.user_id} says:
          </Media.Left>
          <Media.Body>
            <Media.Heading>{subcomment.comment_text} <Glyphicon glyph="share-alt" id={subcomment.id} onClick={this.renderReplyBox}/></Media.Heading>
            <p>posted {subcomment.created_at}</p>
            {this.state.commentId == subcomment.id ? <CommentsNew onSubmitHandler={this.onSubmitHandler} /> : null }
            {subcomment.sub_comments.map(this.renderSubComments)}
          </Media.Body>
        </Media>
      )
    }
  }

  renderComments(comment) {
    if (!comment.parent_comment_id) {
      return (
        <Media>
          <Media.Left>
            {comment.user_id} says:
          </Media.Left>
          <Media.Body>
            <Media.Heading>{comment.comment_text} <Glyphicon glyph="share-alt" id={comment.id} onClick={this.renderReplyBox}/></Media.Heading>
            <p>posted {comment.created_at}</p>
            {this.state.commentId == comment.id ? <CommentsNew onSubmitHandler={this.onSubmitHandler} /> : null }
            {comment.sub_comments.map(this.renderSubComments)}
          </Media.Body>
        </Media>
      )
    }
  };

  render() {
    const post = this.props.post;

    if (!post) {
      return <Grid>Loading...</Grid>
    };

    const title = <h2>{post.title}</h2>

    const currentDatetime = new Date().toISOString()

    const postDatetimePlusHour = post.created_at.slice(0,12) + String(Number(post.created_at[12]) + 1) + post.created_at.slice(13)

    return (
      <Grid>
        <Row>
          <Col xs={12} md={8} >
            <Panel header={title}>
              <p>{post.content}</p>
              {currentDatetime < postDatetimePlusHour && <Button bsStyle="primary" bsSize="small" href="/posts/new">Edit</Button>}
            </Panel>
          </Col>
          <Col xs={6} md={4}>
            <Image src={post.image_url_thumb} rounded />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={8} >
            <CommentsNew onSubmitHandler={this.onSubmitHandler} />
          </Col>
        </Row>
        <br ></br>
        <Row>
          <Col xs={12} md={8} >
            <Media.List>
              {post.comments.map(this.renderComments)}
            </Media.List>
          </Col>
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


//
// function PostsShow (props) {
//
//   function renderComments(comment) {
//     return (
//       <Media>
//       <Media.Left>
//         {comment.user_id} says:
//       </Media.Left>
//       <Media.Body>
//         <Media.Heading>{comment.comment_text}</Media.Heading>
//         <p>posted {comment.created_at}</p>
//       </Media.Body>
//       {comment.sub_comments.map(this.renderComments).bind(this)}
//       </Media>
//     )
//   };
//
//   const post = props.post;
//
//   if (!post) {
//     return <Grid>Loading...</Grid>
//   };
//
//   const title = <h2>{post.title}</h2>
//
//   const currentDatetime = new Date().toISOString()
//
//   const postDatetimePlusHour = post.created_at.slice(0,12) + String(Number(post.created_at[12]) + 1) + post.created_at.slice(13)
//
//   return (
//     <Grid>
//       <Row>
//         <Col xs={12} md={8} >
//           <Panel header={title}>
//             <p>{post.content}</p>
//             {currentDatetime < postDatetimePlusHour && <Button bsStyle="primary" bsSize="small" href="/posts/new">Edit</Button>}
//           </Panel>
//         </Col>
//         <Col xs={6} md={4}>
//           <Image src={post.image_url_thumb} rounded />
//         </Col>
//       </Row>
//       <Row>
//         <Media.List>
//           {post.comments.map(renderComments)}
//         </Media.List>
//       </Row>
//     </Grid>
//   );
// };
//
//
// function mapStateToProps(state, ownProps){
//   const post = state.posts.find(function(post) { return post.id == ownProps.params.id });
//   return { post: post }
// }
//
// function mapDispatchToProps(dispatch) {
//   return {actions: bindActionCreators(actions, dispatch)}
// }
//
// const componentCreator = connect(mapStateToProps, mapDispatchToProps)
// export default componentCreator(PostsShow)
