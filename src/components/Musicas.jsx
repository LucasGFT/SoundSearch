import p from 'prop-types';
import { Link } from 'react-router-dom';

export default function Musicas({ musicas }) {
  return (
    <div className="listaResultado">
      {musicas.length > 0 ? musicas.map((elem) => (
        <div key={ elem.artworkUrl100 }>
          <span className="listaResultadoImg">
            {' '}
            <img src={ elem.artworkUrl100 } alt={ elem.artistName } />
            {' '}
          </span>
          <h3>
            {`Nome: ${elem.collectionName}`}
          </h3>
          <h5>{`Artista ${elem.artistName}`}</h5>
          <h5>{elem.artistName}</h5>
          <span className="listaResultadoButton">
            <Link
              to={ `/SoundSearch/album/${elem.collectionId}` }
              data-testid={ `link-to-album-${elem.collectionId}` }
            >
              Procurar Album
            </Link>
          </span>
        </div>
      )) : (
        <h1>Nenhum álbum foi encontrado</h1>
      )}

    </div>
  );
}

Musicas.propTypes = {
  musicas: p.arrayOf(p.shape()).isRequired,
};
