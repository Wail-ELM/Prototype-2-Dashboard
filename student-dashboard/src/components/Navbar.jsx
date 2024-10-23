import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #333;
  padding: 10px;
`;

const NavLink = styled(Link)`
  color: white;
  margin-right: 20px;
  text-decoration: none;
`;

const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/">Students</NavLink>
      <NavLink to="/teachers">Teachers</NavLink>
      <NavLink to="/courses">Courses</NavLink>
    </Nav>
  );
};

export default Navbar;