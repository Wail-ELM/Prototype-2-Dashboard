// src/components/StudentList.js
import React, { useState } from 'react';
import styled from 'styled-components';

const StudentContainer = styled.section`
  margin: 20px 0;
  padding: 20px;
  background-color: #1e1e1e;
  border-radius: 8px;
`;

const StudentCard = styled.div`
  background-color: #333;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  }
`;

const StudentName = styled.h3`
  color: #4CAF50;
`;

const SearchInput = styled.input`
  padding: 10px;
  width: 100%;
  margin-bottom: 15px;
  border-radius: 5px;
  border: 1px solid #555;
  background-color: #222;
  color: #b0b0b0;
`;

const GradeBadge = styled.span`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 12px;
  font-size: 0.8em;
  color: #fff;
  background-color: ${props => 
    props.grade > 85 ? '#4CAF50' : 
    props.grade > 70 ? '#FFC107' : '#F44336'};
`;

function StudentList({ students }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <StudentContainer>
      <h2>Students</h2>
      <SearchInput
        type="text"
        placeholder="Search students by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredStudents.map((student) => (
        <StudentCard key={student.id}>
          <StudentName>{student.name}</StudentName>
          <p>Year: {student.year}</p>
          <h4>Grades:</h4>
          <ul>
            {Object.entries(student.courses).map(([course, grade]) => (
              <li key={course}>
                {course}: <GradeBadge grade={grade}>{grade >= 0 && grade <= 100 ? grade : 'N/A'}</GradeBadge>
              </li>
            ))}
          </ul>
        </StudentCard>
      ))}
    </StudentContainer>
  );
}

export default StudentList;
