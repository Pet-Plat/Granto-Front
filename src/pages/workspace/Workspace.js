import './Workspace.css';
import {autoResize} from './autoResize';

function Workspace() {
  return (
  <div id="wrapper">
    <div className="chat-wrapper">
      <div className="chat-box">
        <div className="messages" id="chatMessages">
          <div className="message user">Привет, как дела?</div>
          <div className="message bot">Всё хорошо, спасибо! Чем могу помочь сегодня?</div>
          <div className="message user">Мне нужна помощь с получением гранта</div>
        </div>
      </div>
      <div className="input-box">
        <textarea id="userInput" placeholder="Введите сообщение..." maxLength={512} onInput={(e) => autoResize(e.target)}/>
        <button id="sendButton">Отправить</button>
      </div>
    </div>
  </div>
  );
}

export default Workspace;
