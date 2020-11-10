import React from 'react';
import Header from '../components/BlogHeader';
import Article from '../components/Article';
import Comment from '../components/Comment';

import './Blog.css';

const Blog = (props) => {
  return (
    <div>
      <Header />
      <Article />
      <Comment />
    </div>
  )
}

export default Blog;