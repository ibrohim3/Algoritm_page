import React from 'react';
import icon1 from '../assets/icon1.svg';
import icon2 from '../assets/icon2.svg';
import icon3 from '../assets/icon3.svg';
import icon4 from '../assets/icon4.svg';

function CardList() {
  const cards = [
    {
      title: 'Doimiy musobaqalar',
      desc: 'Dasturlash, dizayn sohalari bo‘yicha haftalik sovrinli musobaqalar.',
      icon: icon1,
    },
    {
      title: 'Ish taklif qilish kafolati ',
      desc: 'Algoritm kurslarni muvaffaqiyatli bitirgano‘quvchilarga ish taklif qilish kafolatini beradi.',
      icon: icon3,
    },
    {
      title: 'Sertifikat',
      desc: 'Kursni muvaffaqiyatli tamomlagan o‘quvchilarAlgoritmning sertifikatiga ega bo‘ladi.',
      icon: icon2,
    },
    {
      title: 'Portfolio baholash',
      desc: 'Mutaxassislar tomonidan portfoliongizga baho.',
      icon: icon4,
    },
  ];

  return (
    <section className="comfort-section">
      <h2 className="theme">Nima uchun Algoritmda o‘qish kerak?</h2>
      <div className="cards">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <div className="info">
              <h2>{card.title}</h2>
              <p>{card.desc}</p>
            </div>
            <div className="icon">
              <img src={card.icon} alt="icon" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CardList;
