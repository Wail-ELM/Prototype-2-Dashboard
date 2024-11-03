// src/components/DashboardHeader.js
import styled from 'styled-components';

const Header = styled.header`
  background-color: #4CAF50;
  color: white;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
`;

export default function DashboardHeader() {
  return <Header>Student Dashboard</Header>;
}
