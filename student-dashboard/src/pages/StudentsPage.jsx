import React, { useState } from 'react';
import styled from 'styled-components';
import StudentPerformanceChart from '../components/StudentPerformanceChart';
import { Parser } from 'json2csv';
import jsPDF from 'jspdf';

const StudentContainer = styled.section`
  margin: 20px 0;
  padding: 20px;
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const Select = styled.select`
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #d0c9c0;
  background-color: #faf7f3;
  color: #4b4b4b;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const StudentCard = styled.div`
  background-color: ${({ theme }) => theme.cardBackground};
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
`;

const StudentName = styled.h3`
  color: ${({ theme }) => theme.text};
  font-size: 1.2em;
  margin-bottom: 10px;
`;

const ViewButton = styled.button`
  padding: 8px 12px;
  border: none;
  background-color: #b89b72;
  color: #fff;
  font-size: 0.9em;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #8c7a6b;
  }
`;

const ExportButton = styled.button`
  padding: 10px 15px;
  background-color: #4b4b4b;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 0.9em;
  font-weight: bold;
  cursor: pointer;
  margin-top: 15px;
  margin-right: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3b3b3b;
  }
`;

const PaginationButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 8px 12px;
  border: none;
  background-color: #8c7a6b;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  &:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: #f9f6f1;
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  max-width: 600px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const CloseButton = styled.button`
  background: #8c7a6b;
  color: #fff;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 10px;
`;

function StudentsPage({ students }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const studentsPerPage = 10;

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
    setCurrentPage(1); 
  };

  const openModal = (student) => setSelectedStudent(student);
  const closeModal = () => setSelectedStudent(null);

  const filteredStudents = selectedYear
    ? students.filter(student => student.year === selectedYear)
    : students;

  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = filteredStudents.slice(indexOfFirstStudent, indexOfLastStudent);
  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);

  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  const exportToCSV = () => {
    const fields = ['name', 'year', ...Object.keys(students[0].courses)];
    const csvData = currentStudents.map((student) => ({
      name: student.name,
      year: student.year,
      ...student.courses,
    }));

    const opts = { fields };
    const parser = new Parser(opts);
    const csv = parser.parse(csvData);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'students_data.csv');
    link.click();
  };

  const exportToPDF = () => {
    const pdf = new jsPDF();
    pdf.setFontSize(12);
    pdf.text('Student Data', 10, 10);

    let yPosition = 20;

    currentStudents.forEach((student, index) => {
      pdf.text(`Student ${index + 1}: ${student.name}`, 10, yPosition);
      pdf.text(`Year: ${student.year}`, 10, yPosition + 10);

      let courseYPosition = yPosition + 20;
      Object.entries(student.courses).forEach(([course, grade]) => {
        pdf.text(`${course}: ${grade}`, 20, courseYPosition);
        courseYPosition += 10;
      });

      yPosition = courseYPosition + 10; 
    });

    pdf.save('students_data.pdf');
  };

  return (
    <StudentContainer>
      <h2>Students</h2>
      <FilterContainer>
        <Select value={selectedYear} onChange={handleYearChange}>
          <option value="">All Years</option>
          <option value="1">1st Year</option>
          <option value="2">2nd Year</option>
          <option value="3">3rd Year</option>
        </Select>
      </FilterContainer>
      <div>
        <ExportButton onClick={exportToCSV}>Export to CSV</ExportButton>
        <ExportButton onClick={exportToPDF}>Export to PDF</ExportButton>
      </div>
      <Grid>
        {currentStudents.map((student) => (
          <StudentCard key={student.id}>
            <StudentName>{student.name}</StudentName>
            <p>Year: {student.year}</p>
            <ViewButton onClick={() => openModal(student)}>View Performance</ViewButton>
          </StudentCard>
        ))}
      </Grid>
      <PaginationButtons>
        <Button onClick={prevPage} disabled={currentPage === 1}>Previous</Button>
        <Button onClick={nextPage} disabled={currentPage === totalPages}>Next</Button>
      </PaginationButtons>
      {selectedStudent && (
        <ModalOverlay>
          <ModalContent>
            <CloseButton onClick={closeModal}>Close</CloseButton>
            <StudentPerformanceChart key={selectedStudent.id} student={selectedStudent} />
          </ModalContent>
        </ModalOverlay>
      )}
    </StudentContainer>
  );
}

export default StudentsPage;
