import React from 'react';
import styled from 'styled-components';

const TeacherContainer = styled.section`
  margin: 20px 0;
  padding: 20px;
  background-color: ${({ theme }) => theme.cardBackground};
  color: ${({ theme }) => theme.text};
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const TeacherCard = styled.div`
  background-color: ${({ theme }) => theme.background};
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 8px;
`;

const TeacherName = styled.h3`
  color: ${({ theme }) => theme.text};
`;

function TeachersPage({ teachers }) {
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

export default TeachersPage;
