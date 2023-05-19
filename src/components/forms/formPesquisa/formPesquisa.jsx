import p from 'prop-types';
import './style.css';

function FormPesquisa({ nomeArtista, haveChange,
  inputRef, isDisableButton, clickButton }) {
  return (
    <form className="form-pesquisa">
      <input
        ref={ inputRef }
        placeholder="Nome do Artista:"
        data-testid="search-artist-input"
        onChange={ haveChange }
        value={ nomeArtista }
      />
      <button
        type="button"
        disabled={ isDisableButton }
        data-testid="search-artist-button"
        onClick={ clickButton }
      >
        Pesquisar
      </button>
    </form>
  );
}

FormPesquisa.propTypes = {
  nomeArtista: p.string.isRequired,
  haveChange: p.func.isRequired,
  inputRef: p.shape({ current: p.instanceOf(Element) }).isRequired,
  isDisableButton: p.bool.isRequired,
  clickButton: p.func.isRequired,
};

export default FormPesquisa;
