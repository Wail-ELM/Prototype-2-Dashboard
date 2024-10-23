import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import StudentsOverview from './components/StudentsOverview';
import TeachersOverview from './components/TeachersOverview';
import CoursesOverview from './components/CoursesOverview';

const Container = styled.div`
  font-family: sans-serif;
`;

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Navbar />
        <Routes>
          <Route path="/" element={<StudentsOverview />} />
          <Route path="/teachers" element={<TeachersOverview />} />
          <Route path="/courses" element={<CoursesOverview />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;