import React, { useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import { useRef } from 'react';

function App() {
  const [posts, setPosts] = useState([
    {id:1, title: 'Javascript', body: 'Description'},
    {id:2, title: 'Javascript2', body: 'Description2'},
    {id:3, title: 'Javascript3', body: 'Description3'},
  ])

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')


  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      id: Date.now(),
      title,
      body
    }
    setPosts([...posts, newPost])
    setTitle('')
    setBody('')
  }

  return (
    <div className='App'>
      <form>
        {/* управляемый компонент */}
        <MyInput 
          value = {title}
          onChange = {event => setTitle(event.target.value)}
          type='text'
          placeholder='Название'
        />
        {/* неуправляемый компонент */}
        <MyInput 
          value = {body}
          onChange = {event => setBody(event.target.value)}
          type='text'
          placeholder='Описание'
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>

      </form>
      <PostList posts={posts} title="Посты про JS"/>
    </div>
  );
}

export default App;
