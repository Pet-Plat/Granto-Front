import { useState } from 'react';

export const useAuthModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true); 

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    handleCloseModal();
  };

  return {
    isModalOpen,
    handleCloseModal,
    handleLogin
  };
};
