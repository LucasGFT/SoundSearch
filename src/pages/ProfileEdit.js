import React, { useContext, useState } from 'react';
import p from 'prop-types';
import SoundSearchContext from '../contexts/context';
import { createUser } from '../contexts/actions';
import FormUpdateUser from '../components/forms/formUpdateUser/FormUpdateUser';

function ProfileEdit({ fecharForm }) {
  const context = useContext(SoundSearchContext);
  const { postsState, postsDispatch } = context;
  const [email, setEmail] = useState(postsState.usuario.email);
  const [nome, setNome] = useState(postsState.usuario.nome);

  const handleInput = (text, params) => {
    if (params === 'nome') setNome(text);
    if (params === 'email') setEmail(text);
  };

  const handleClick = () => {
    createUser(postsDispatch, { email, nome }).then((dispatch) => dispatch());
    fecharForm(false);
  };

  return (
    <div data-testid="page-profile-edit" className="div-form-update">
      <FormUpdateUser
        handleInput={ handleInput }
        handleClick={ handleClick }
        nome={ nome }
        email={ email }
      />
    </div>
  );
}

ProfileEdit.propTypes = {
  fecharForm: p.func.isRequired,
};

export default ProfileEdit;
