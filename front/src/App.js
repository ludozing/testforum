import React from 'react';
import { Routes, Route } from 'react-router';
import CreatePost from './board/CreatePost';
import PostList from './board/PostList';
import ReadPost from './board/ReadPost';
import UpdatePost from './board/UpdatePost';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='content'>
        <Routes>
          <Route path={"/"} element={<PostList/>}/>
          <Route path={"/write"} element={<CreatePost postClass={'테스트'}/>}/>
          <Route path={"/edit"} element={<UpdatePost/>}/>
          <Route path={"/read/:id"} element={<ReadPost/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
