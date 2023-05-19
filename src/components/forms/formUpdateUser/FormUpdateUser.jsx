import p from 'prop-types';
import './style.css';
import { useEffect, useState } from 'react';

const cinco = 5;
function FormUpdateUser({ handleInput, nome, email, handleClick }) {
  const [buttonIsDisable, setButtonIsDisable] = useState(true);
  useEffect(() => {
    if (nome.length > 2 && email.length > cinco) {
      setButtonIsDisable(false);
    } else {
      setButtonIsDisable(true);
    }
  }, [nome, email]);
  return (
    <form className="form-update-user">
      <h3>Alterar Informacoes de Cadastro</h3>
      <label htmlFor="nome">
        <span>
          Nome:
        </span>
        <input
          onChange={ ({ target }) => handleInput(target.value, 'nome') }
          type="text"
          name="nome"
          value={ nome }
        />
      </label>
      <label htmlFor="email">
        <span>
          Email:
        </span>
        <input
          onChange={ ({ target }) => handleInput(target.value, 'email') }
          type="text"
          name="email"
          value={ email }
        />
      </label>
      <button
        disabled={ buttonIsDisable }
        type="button"
        onClick={ handleClick }
      >
        Salvar

      </button>
    </form>
  );
}

FormUpdateUser.propTypes = {
  handleInput: p.func.isRequired,
  handleClick: p.func.isRequired,
  nome: p.string.isRequired,
  email: p.string.isRequired,
};

export default FormUpdateUser;
