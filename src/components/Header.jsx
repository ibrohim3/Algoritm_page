import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
              <img src="../public/logo.png" alt="logo image" />
          </li>
          <li>
            <Link to="/" className='nav-link activ'>Bosh sahifa</Link>
          </li>
          <li>
            <Link to="/courses" className='nav-link activ'>Kurslar</Link>
          </li>
          <li>
            <Link to="/events" className='nav-link activ'>Eventlar</Link>
          </li>
          <li>
            <Link to="/about" className='nav-link activ'>Biz haqimizda</Link>
          </li>
          <li>
            <Link to="/nowadays" className='nav-link activ'>Yangiliklar</Link>
          </li>
          <li>
            <Link to="/sertificate" className='nav-link activ'>Sertifikatlar</Link>
          </li>
          <li>
            <Link to="/call" className='nav-link activ'>Aloqa markazi</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
