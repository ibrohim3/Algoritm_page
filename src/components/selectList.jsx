import React, { useState } from 'react';
import './selectList.css';

function FaqAccordion() {
  const faqs = [
    {
      question: 'Kurslar bepulmi?',
      answer:
        'Yo’q, hozir barcha kurslar pullik. Narxlarni har bir kursning sahifasida ko’rishingiz mumkin.',
    },
    {
      question: 'Qanday to‘lov turlari mavjud?',
      answer:
        'Click, Payme, Apelsin va naqd to‘lovlar orqali to‘lashingiz mumkin.',
    },
    {
      question: 'Online kurslar bormi?',
      answer: 'Ha, barcha kurslar online ham mavjud.',
    },
    {
      question: 'Sertifikat beriladimi?',
      answer: 'Ha, kursni tugatgach sertifikat beriladi.',
    },
  ];

  return (
    <section className="faq-grid">
      {faqs.map((faq, index) => (
        <details key={index} className="faq-item" open>
          <summary>{faq.question}</summary>
          <p>{faq.answer}</p>
        </details>
      ))}
    </section>
  );
}

export default FaqAccordion;
