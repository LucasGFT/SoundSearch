import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Contact from './Contact';
import NavHeader from './nav/NavHeader';
import SoundSearchContext from '../contexts/context';

function Header() {
  const context = useContext(SoundSearchContext);
  const { postsState } = context;
  const [nome, setNome] = useState(postsState.usuario.nome);

  useEffect(() => {
    setNome(postsState.usuario.nome);
  }, [postsState.usuario.nome]);

  const memoizedHeaderContent = useMemo(() => (
    <div>
      <div className="nomeContact">
        <h2 data-testid="header-user-name">
          Nome:
          {' '}
          {nome}
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
