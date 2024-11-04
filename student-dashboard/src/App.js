import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import TeachersPage from './pages/TeachersPage';
import CoursesPage from './pages/CoursesPage';
import StudentsPage from './pages/StudentsPage';
import GlobalStyle from './styles/GlobalStyle';
import { lightTheme, darkTheme } from './styles/themes';
import styled from 'styled-components';
import data from './data/data.json';

const ToggleButton = styled.button`
  background-color: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.text};
  padding: 10px 15px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  margin: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.accent};
  }
`;

function App() {
  const [teachers, setTeachers] = useState([]);
  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([]);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    setTeachers(data.teachers);
    setCourses(data.courses);
    setStudents(data.students);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Router>
        <ToggleButton onClick={toggleTheme}>Toggle Theme</ToggleButton>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage students={students} />} />
            <Route path="teachers" element={<TeachersPage teachers={teachers} />} />
            <Route path="courses" element={<CoursesPage courses={courses} />} />
            <Route path="students" element={<StudentsPage students={students} />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
