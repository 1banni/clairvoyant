// frontend/src/components/LoginFormModal/index.js

import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginModal';

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm onSubmit={() => setShowModal(false)} />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;


