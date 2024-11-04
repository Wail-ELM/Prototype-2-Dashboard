import React from 'react';
import styled from 'styled-components';

const CourseContainer = styled.section`
  margin: 20px 0;
  padding: 20px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const CourseCard = styled.div`
  background-color: #f9f6f1;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 8px;
`;

const CourseName = styled.h3`
  color: #4b4b4b;
`;

function CoursesPage({ courses }) {
  return (
    <CourseContainer>
      <h2>Courses</h2>
      {courses.map((course) => (
        <CourseCard key={course.id}>
          <CourseName>{course.name}</CourseName>
          <p>Instructor: {course.teacher}</p>
          <p>Schedule: {course.schedule.map(s => `${s.day} ${s.time}`).join(', ')}</p>
        </CourseCard>
      ))}
    </CourseContainer>
  );
}

export default CoursesPage;
