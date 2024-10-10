// components/AdviceComponent.js
import { useState } from 'react';
import axios from 'axios';

const AdviceComponent = () => {
  const [advice, setAdvice] = useState('');
  const [error, setError] = useState(null);

  const fetchAdvice = () => {
    axios
      .get('https://api.adviceslip.com/advice')
      .then((response) => {
        setAdvice(response.data.slip.advice);
        setError(null);
      })
      .catch((err) => {
        console.error('Error fetching advice:', err);
        setAdvice('');
        setError('Failed to fetch advice. Please try again.');
      });
  };

  return (
    <div>
      <button id="show-advice" onClick={fetchAdvice}>
        მიიღე რჩევა
      </button>
      <p id="advice-text">{advice ? `"${advice}"` : error}</p>
    </div>
  );
};

export default AdviceComponent;
