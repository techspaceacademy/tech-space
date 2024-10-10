// components/Navbar.js
import { useState } from 'react';
import Link from 'next/link';
import LoginModal from './LoginModal';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleHamburger = () => {
    setIsActive(!isActive);
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  return (
    <nav className="navbar container">
      <Link href="/">
        <a className="nav-logo">TechSpace.</a>
      </Link>
      <ul className={`nav-menu ${isActive ? 'active' : ''}`}>
        <li className="nav-item">
          <Link href="/">
            <a className="nav-link" onClick={closeMenu}>
              მთავარი
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/course">
            <a className="nav-link" onClick={closeMenu}>
              კურსები
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/about">
            <a className="nav-link" onClick={closeMenu}>
              მიზანი
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/blog">
            <a className="nav-link" onClick={closeMenu}>
              ბლოგი
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <LoginModal />
        </li>
      </ul>
      <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={toggleHamburger}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
