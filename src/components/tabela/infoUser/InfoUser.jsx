import PropTypes from 'prop-types';
import './style.css';

function InfoUser({ usuario }) {
  return (
    <div className="info">
      <h3>
        Nome:
        {' '}
        {usuario.nome}
      </h3>
      <h3>
        Email:
        {' '}
        {usuario.email}
      </h3>
    </div>
  );
}

InfoUser.propTypes = {
  usuario: PropTypes.shape().isRequired,
};

export default InfoUser;
