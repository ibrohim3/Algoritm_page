import React from 'react';
import './Courses.css';
import imgNot from '../assets/img not.png';
import gallery from '../assets/gallery.png';

const Courses = () => {
  return (
    <section className="course-section">
      <div className="header">
        <h2>Kurslar</h2>
        <button className="white-btn">
          Standart - Haftada 3 kun 2 soat dars
        </button>
        <button className="black-btn">
          Bootcamp - Haftada 5 kun 3-4 soat dars
        </button>
        <button className="white-btn">Dasturlash</button>
      </div>

      <div className="courses">
        {[1, 2, 3, 4].map((_, index) => (
          <div className="course" key={index}>
            <div className="img">
              <img src={imgNot} alt="Kurs rasmi" />
              <img src={gallery} alt="Galereya" />
            </div>
            <div className="description">
              <div className="title">
                <p>Frontend - React JS</p>
              </div>
              <div className="info">
                <p>Davomiyligi - 8 oy</p>
              </div>
              <div className="btns">
                <button className="black-btn">Dasturlash</button>
                <button className="white-btn">O‘rganish</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
