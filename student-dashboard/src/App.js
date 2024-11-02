import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DashboardHeader from './components/DashboardHeader';
import TeacherList from './components/TeacherList';
import CourseList from './components/CourseList';
import StudentList from './components/StudentList';
import StudentStats from './components/StudentStats';
import GlobalStyle from './styles/GlobalStyle';
import data from './data/data.json';

const Container = styled.div`
  max-width: 1200px;
  margin: 20px auto;
  padding: 0 20px;
`;

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
    <Container>
      <GlobalStyle />
      <DashboardHeader />
      <StudentStats students={students} />
      <TeacherList teachers={teachers} />
      <CourseList courses={courses} />
      <StudentList students={students} />
    </Container>
  );
}

export default App;
