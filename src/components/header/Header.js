import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Granto</h1>
      </div>
      <nav className="nav-links">
        <Link to="/">Главная</Link>
        <Link to="/">Чат</Link>
        <Link to="/">Профиль</Link>
        <Link to="/">Контакты</Link>
      </nav>
    </header>
  );
}

export default Header;
