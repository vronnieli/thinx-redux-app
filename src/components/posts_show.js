import React from 'react';
import * as actions from '../actions/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import { Grid, Row, Panel, Col, Image, Media, Button } from 'react-bootstrap';
//
// class PostsShow extends React.Component {
//   constructor(props) {
//     super(props)
//     this.renderComments = this.renderComments.bind(this)
//   };
//
//   renderComments(comment) {
//     debugger;
//     return (
//       <Media>
//       <Media.Left>
//         {comment.user_id} says:
//       </Media.Left>
//       <Media.Body>
//         <Media.Heading>{comment.comment_text}</Media.Heading>
//         <p>posted {comment.created_at}</p>
//       </Media.Body>
//       //{comment.sub_comments.map(this.renderComments)}
//       </Media>
//     )
//   };
//
//   render() {
//     const post = this.props.post;
//     debugger;
//
//     if (!post) {
//       return <Grid>Loading...</Grid>
//     };
//
//     const title = <h2>{post.title}</h2>
//
//     return (
//       <Grid>
//         <Row>
//           <Col xs={12} md={8} >
//             <Panel header={title}>
//               {post.content}
//             </Panel>
//           </Col>
//           <Col xs={6} md={4}>
//             <Image src={post.image_url_thumb} rounded />
//           </Col>
//         </Row>
//         <Row>
//           <Media.List>
//             {post.comments.map(this.renderComments)}
//           </Media.List>
//         </Row>
//       </Grid>
//     );
//   };
//
// };
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



function PostsShow (props) {

  function renderComments(comment) {
    return (
      <Media>
      <Media.Left>
        {comment.user_id} says:
      </Media.Left>
      <Media.Body>
        <Media.Heading>{comment.comment_text}</Media.Heading>
        <p>posted {comment.created_at}</p>
      </Media.Body>
      </Media>
    )
  };

  const post = props.post;

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
        <Media.List>
          {post.comments.map(renderComments)}
        </Media.List>
      </Row>
    </Grid>
  );
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
