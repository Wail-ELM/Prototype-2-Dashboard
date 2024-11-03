// src/components/CourseList.js
import React from 'react';
import styled from 'styled-components';

const CourseContainer = styled.section`
  margin: 20px 0;
  padding: 20px;
  background-color: #1e1e1e;
  border-radius: 8px;
`;

const CourseCard = styled.div`
  background-color: #2a2a2a;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

const CourseName = styled.h3`
  color: #4CAF50;
`;

function CourseList({ courses }) {
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

export default CourseList;
