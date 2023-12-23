import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <a href="/home">
        <FaHome size={24} />
      </a>
      <a href="/teste">
        <FaUserAlt size={24} />
      </a>
      <a href="/teste">
        <FaSignInAlt size={24} />
      </a>
    </Nav>
  );
}
