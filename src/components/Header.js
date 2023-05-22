import React, { useMemo, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Contact from './Contact';
import NavHeader from './nav/NavHeader';

function Header() {
  const [nome] = useState(JSON.parse(localStorage.getItem('user_tune')));

  const memoizedHeaderContent = useMemo(() => (
    <div>
      <div className="nomeContact">
        <h2 data-testid="header-user-name">
          Nome:
          {' '}
          {nome && nome.nome}
        </h2>
        <Contact />
      </div>
      <NavHeader />
    </div>
  ), [nome]);
  return (
    <div>
      {nome ? (
        <header data-testid="header-component">
          {memoizedHeaderContent}
        </header>
      ) : (<Redirect to="/SoundSearch" />)}
    </div>
  );
}

export default Header;
