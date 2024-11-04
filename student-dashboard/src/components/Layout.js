// src/components/Layout.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import DashboardHeader from './DashboardHeader';

const Nav = styled.nav`
  display: flex;
  gap: 15px;
  padding: 10px;
  background-color: #333;
  color: white;
  border-radius: 8px;
  margin: 20px 0;
  justify-content: center;
`;

const NavLink = styled(Link)`
  color: #4CAF50;
  text-decoration: none;

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
