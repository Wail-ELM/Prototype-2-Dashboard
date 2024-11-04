// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import TeachersPage from './pages/TeachersPage';
import CoursesPage from './pages/CoursesPage';
import StudentsPage from './pages/StudentsPage';
import GlobalStyle from './styles/GlobalStyle';
import data from './data/data.json';

function App() {
  const [teachers, setTeachers] = useState([]);
  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    setTeachers(data.teachers);
    setCourses(data.courses);
    setStudents(data.students);
  }, []);

  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage students={students} />} />
          <Route path="teachers" element={<TeachersPage teachers={teachers} />} />
          <Route path="courses" element={<CoursesPage courses={courses} />} />
          <Route path="students" element={<StudentsPage students={students} />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
