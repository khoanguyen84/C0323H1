import logo from './logo.svg';
import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './components/layout/Navbar';
import { Routes, Route } from 'react-router-dom';
import StudentList from './components/student/StudentList';
import PostList from './components/post/PostList';
import StudetnDetail from './components/student/StudentDetail';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
          <Route path='/' element={<StudentList/>} />
          <Route path='/student/list' element={<StudentList/>} />
          <Route path='/student/detail/:studentId' element={<StudetnDetail/>}/>
          <Route path='/post/list' element={<PostList/>} />
      </Routes>
    </>
  );
}

export default App;
