import styled from 'styled-components';

const Header = styled.header`
  background-color: #e9e4dc;
  color: #2c2c2c;
  padding: 20px;
  text-align: center;
  border-radius: 12px;
  margin-bottom: 20px;
`;

export default function DashboardHeader() {
  return <Header>Student Dashboard</Header>;
}
