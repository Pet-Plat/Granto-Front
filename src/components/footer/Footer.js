import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Контактная информация</h3>
          <ul>
            <li><strong>Адрес:</strong> 1234 Примерный переулок, Город, Страна</li>
            <li><strong>Телефон:</strong> +1 (234) 567-8901</li>
            <li><strong>Электронная почта:</strong> <a href="mailto:support@granto.com">support@granto.com</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Социальные сети</h3>
          <ul>
            <li><a href="https://facebook.com/granto" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com/granto" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://linkedin.com/company/granto" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>О нас</h3>
          <p>Granto — ваш надежный партнер в области грантовых заявок. Мы стремимся сделать процесс получения грантов простым и доступным для всех.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Granto. Все права защищены.</p>
      </div>
    </footer>
  );
}

export default Footer;
