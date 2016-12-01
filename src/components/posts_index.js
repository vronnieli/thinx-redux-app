import React from 'react';
import {connect} from 'react-redux';

import { Grid, Row, Col, Thumbnail, Badge, Button } from 'react-bootstrap';

function PostsIndex (props) {
  const renderPosts = (post) => {
    return (
      <Col xs={6} md={4}>
        <Thumbnail src={post.image_url_thumb} alt="242x200">
          <h3>{post.title} <Badge>{post.comments.length}</Badge></h3>
          <p>{post.content}</p>
            <Button bsStyle="primary" bsSize="small" href={'/posts/' + post.id}>Read More</Button>
        </Thumbnail>
      </Col>
    )
  };

  return (
    <Grid>
      <Row>
      {props.posts.map(renderPosts)}
      </Row>
      <Button bsStyle="primary" bsSize="small" href="/posts/new">Share What You THINX</Button>
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
