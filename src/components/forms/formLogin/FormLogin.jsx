import { Redirect } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import TrybeTunesContext from '../../../contexts/context';
import { getUser } from '../../../contexts/actions';
import './style.css';

const cinco = 5;

function FormLogin() {
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [isDisableButton, setIsDisableButton] = useState(true);
  const context = useContext(TrybeTunesContext);
  const { postsDispatch } = context;

  useEffect(() => {
    if (nome.length > 2 && email.length > cinco) {
      setIsDisableButton(false);
    } else {
      setIsDisableButton(true);
    }
  }, [nome, email]);

  const haveChange = (event, typeInput) => {
    const { value } = event.target;
    if (typeInput === 'nome') setNome(value);
    if (typeInput === 'email') setEmail(value);
  };

  const haveClickButton = () => {
    localStorage.setItem('user_tune', JSON.stringify({ nome, email }));
    getUser(postsDispatch, { nome, email }).then((dispatch) => dispatch());
    setShouldRedirect(true);
  };

  if (shouldRedirect) {
    return <Redirect to="/TrybeTunes/search" />;
  }

  return (
    <form className="formLogin">
      <label htmlFor="input-nome">
        <h2>Nome:</h2>
        <input
          data-testid="login-name-input"
          id="input-nome"
          onChange={ (event) => haveChange(event, 'nome') }
          value={ nome }
        />
        <h2>Email:</h2>
        <input
          onChange={ (event) => haveChange(event, 'email') }
          value={ email }
        />
        <br />
        <br />
        <button
          type="button"
          data-testid="login-submit-button"
          disabled={ isDisableButton }
          onClick={ haveClickButton }
        >
          Entrar
        </button>
      </label>
    </form>
  );
}

export default FormLogin;
