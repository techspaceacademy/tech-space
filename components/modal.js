// components/LoginModal.js
import { useState } from 'react';

const LoginModal = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = (e) => {
    if (e.target.id === 'loginModal' || e.target.className === 'close') {
      setModalOpen(false);
    }
  };

  return (
    <>
      <button className="btn-hover color-btn" onClick={openModal}>
        შესვლა
      </button>
      {isModalOpen && (
        <div id="loginModal" className="modal" onClick={closeModal}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            {/* Include your login form here */}
            <p>Login Form</p>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginModal;
