import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import { Grid, Row, Col, Thumbnail, Badge, Button } from 'react-bootstrap';

function PostsIndex (props) {
  const renderPosts = (post) => {
    return (
      <Col xs={6} md={4}>
        <Thumbnail src={"https://s3.us-east-2.amazonaws.com/" + post.image_url_medium} >
          <h3>{post.title} <Badge>{post.comments.length}</Badge></h3>
          <p>{post.content}</p>
          <p>by {post.username}</p>
          <Link to={'/posts/' + post.id}><Button bsStyle="primary" bsSize="small" >Read More</Button></Link>
        </Thumbnail>
      </Col>
    )
  };

  return (
    <Grid>
      <Row>
        <Link to="/posts/new"><Button bsStyle="primary" bsSize="medium" style={{maxWidth: 400, margin: '0 auto 20px'}}>Share What You THINX</Button></Link>
      </Row>
      <Row>
        {props.posts.map(renderPosts)}
      </Row>
    </Grid>
  )

};

function mapStateToProps(state){
  return {
    posts: state.posts
  };
};

const componentCreator = connect(mapStateToProps);
export default componentCreator(PostsIndex);
