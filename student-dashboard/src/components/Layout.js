import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import DashboardHeader from './DashboardHeader';

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  padding: 15px;
  background-color: #f0e9e3;
  border-radius: 8px;
  margin: 20px 0;
  justify-content: center;
`;

const NavLink = styled(Link)`
  color: #8c7a6b;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

function Layout() {
  return (
    <div>
      <DashboardHeader />
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/teachers">Teachers</NavLink>
        <NavLink to="/courses">Courses</NavLink>
        <NavLink to="/students">Students</NavLink>
      </Nav>
      <Outlet />
    </div>
  );
}

export default Layout;
