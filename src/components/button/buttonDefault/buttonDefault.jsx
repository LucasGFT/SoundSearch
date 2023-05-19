import p from 'prop-types';

function ButtonDefault({ propsButton }) {
  return (
    <button
      type="button"
      onClick={
        () => propsButton.func(propsButton.params)
      }
    >
      Alterar Cadastro
    </button>
  );
}

ButtonDefault.propTypes = {
  propsButton: p.shape({
    func: p.func.isRequired,
    params: p.oneOfType([
      p.string,
      p.bool,
    ]),
  }).isRequired,
};

export default ButtonDefault;
