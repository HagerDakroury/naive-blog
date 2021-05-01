import React from 'react';
import PostCreate from './postCreate';
import PostList from './postList';



export default () => {
  return <div className="container">
    <h1>Create A Post</h1>
    <PostCreate />  
    <hr></hr>
    <h1>Posts List</h1>
    <PostList />
  </div>;
};
