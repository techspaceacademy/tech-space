// components/FAQComponent.js
import { useState } from 'react';

const faqItems = [
  {
    question: 'კითხვა 1',
    answer: 'პასუხი 1',
  },
  // Add more FAQ items as needed
];

const FAQComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-container">
      {faqItems.map((item, index) => (
        <div key={index}>
          <div className="faq-question" onClick={() => toggleAnswer(index)}>
            <span>{item.question}</span>
            <span className="faq-icon">{activeIndex === index ? '-' : '+'}</span>
          </div>
          {activeIndex === index && (
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQComponent;
