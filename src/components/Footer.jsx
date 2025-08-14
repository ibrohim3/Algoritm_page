import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaTelegram, FaPhone } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa6';

function Footer() {
  return (
    <footer className="footer">
      <div className="links">
        <a href="">
          <img src="../public/logo 2.svg" alt="" />
        </a>
        <div>
          <ul>
            <li>
              <a href="">Bosh sahifa</a>
            </li>
            <li>
              <a href="">Biz haqimizda</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Kurslar</a>
            </li>
            <li>
              <a href="">Yangiliklar</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Eventlar</a>
            </li>
            <li>
              <a href="">Sertifikatlar</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Aloqa markazi</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
          </ul>
        </div>
        <p>©Algoritm 2024 | Privacy Policy | Certified Policy | Legal</p>
      </div>
      <div className="social-icons">
        {/* <span className='div'>
          <span className="icon-box">
            <FaPhone className="icon" />
          </span>
          95-200-43-04
        </span> */}
        <span className="icon-box">
          <FaTelegram className="icon" />
        </span>
        <span className="icon-box">
          <FaYoutube className="icon" />
        </span>
        <span className="icon-box">
          <FaFacebook className="icon" />
        </span>
        <span className="icon-box">
          <FaInstagram className="icon" />
        </span>
      </div>
    </footer>
  );
}

export default Footer;
