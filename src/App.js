import React, { useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';

function App() {
  const [posts, setPosts] = useState([
    {id:1, title: 'Javascript', body: 'Description'},
    {id:2, title: 'Javascript2', body: 'Description2'},
    {id:3, title: 'Javascript3', body: 'Description3'},
  ])

  const [posts2, setPosts2] = useState([
    {id:1, title: 'Python', body: 'Description'},
    {id:2, title: 'Python2', body: 'Description2'},
    {id:3, title: 'Python3', body: 'Description3'},
  ])

  return (
    <div>
      <PostList posts={posts} title="Посты про JS"/>
      <PostList posts={posts2} title="Посты про Python"/>
    </div>
  );
}

export default App;
