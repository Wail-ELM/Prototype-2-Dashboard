// src/components/TeacherList.js
import React from 'react';
import styled from 'styled-components';

const TeacherContainer = styled.section`
  margin: 20px 0;
  padding: 20px;
  background-color: #1e1e1e;
  border-radius: 8px;
`;

const TeacherCard = styled.div`
  background-color: #2a2a2a;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

const TeacherName = styled.h3`
  color: #4CAF50;
`;

function TeacherList({ teachers }) {
  return (
    <TeacherContainer>
      <h2>Teachers</h2>
      {teachers.map((teacher) => (
        <TeacherCard key={teacher.id}>
          <TeacherName>{teacher.name}</TeacherName>
          <p>Subject: {teacher.subject}</p>
          <p>Availability: {teacher.availability.map(a => `${a.day} ${a.time}`).join(', ')}</p>
          <p>Expert Lab Availability: {teacher.expertLabAvailability.map(a => `${a.day} ${a.time}`).join(', ')}</p>
        </TeacherCard>
      ))}
    </TeacherContainer>
  );
}

export default TeacherList;
