import './Workspace.css';
import React from 'react';
import { autoResize } from './autoResize';
import { Link } from 'react-router-dom';
import { useAuthModal } from './authModalLogic';

function Workspace() {
  const { isModalOpen, handleLogin, handleCloseModal} = useAuthModal();
  return (
    <div id="wrapper">
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Авторизация</h2>
            <form onSubmit={handleLogin}>
              <label htmlFor="username">Имя пользователя:</label>
              <input type="text" id="username" required />
              <label htmlFor="password">Пароль:</label>
              <input type="password" id="password" required />
              <button type="submit">Войти</button>
              <button type="button" onClick={handleCloseModal}>Закрыть</button>
            </form>
            <div className="registration-link">
              <p>Нет аккаунта? <Link to="/"><button className="register-btn">Зарегистрироваться</button></Link></p>
            </div>
          </div>
        </div>
      )}
      
      <div className="chat-wrapper">
        <div className="chat-box">
          <div className="messages" id="chatMessages">
            <div className="message user">Привет, как дела?</div>
            <div className="message bot">Всё хорошо, спасибо! Чем могу помочь сегодня?</div>
            <div className="message user">Мне нужна помощь с получением гранта</div>
          </div>
        </div>
        <div className="input-box">
          <textarea id="userInput" placeholder="Введите сообщение..." maxLength={512} onInput={(e) => autoResize(e.target)} />
          <button id="sendButton">Отправить</button>
        </div>
      </div>
    </div>
  );
}

export default Workspace;
