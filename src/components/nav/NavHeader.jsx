import { Link } from 'react-router-dom/';
import './style.css';

function NavHeader() {
  return (
    <nav>
      <ul className="nav">
        <li>
          <Link to="/SoundSearch/search">Procurar</Link>
        </li>
        <li>
          <Link to="/SoundSearch/favorites">Favoritas</Link>
        </li>
        <li>
          <Link to="/SoundSearch/profile">Perfil</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavHeader;
