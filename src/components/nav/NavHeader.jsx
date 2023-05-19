import { Link } from 'react-router-dom/';
import './style.css';

function NavHeader() {
  return (
    <nav>
      <ul className="nav">
        <li>
          <Link to="/TrybeTunes/search">Procurar</Link>
        </li>
        <li>
          <Link to="/TrybeTunes/favorites">Favoritas</Link>
        </li>
        <li>
          <Link to="/TrybeTunes/profile">Perfil</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavHeader;
