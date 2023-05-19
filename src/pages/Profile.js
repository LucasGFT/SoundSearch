import React, { useContext, useState } from 'react';
import TrybeTunesContext from '../contexts/context';
import ProfileEdit from './ProfileEdit';
import InfoUser from '../components/tabela/infoUser/InfoUser';
import ButtonDefault from '../components/button/buttonDefault/buttonDefault';

function Profile() {
  const context = useContext(TrybeTunesContext);
  const { postsState } = context;
  const [alterarCadastro, setAlterarCadastro] = useState(false);
  const { usuario } = postsState;

  return (
    <div data-testid="page-profile">
      {alterarCadastro ? (<ProfileEdit
        fecharForm={ (pa) => setAlterarCadastro(pa) }
      />) : (
        <div className="profile">
          <InfoUser usuario={ usuario } />
          <ButtonDefault propsButton={ { func: setAlterarCadastro, params: true } } />
        </div>
      )}
    </div>
  );
}

export default Profile;
