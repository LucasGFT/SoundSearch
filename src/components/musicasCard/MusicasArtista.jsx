import p from 'prop-types';
import { useContext } from 'react';
import Musicas from '../Musicas';
import SoundSearchContext from '../../contexts/context';

function MusicasArtista({ valorPesquisa }) {
  const context = useContext(SoundSearchContext);
  const { postsState } = context;
  return (
    <div className="resultadoPesquisa">
      <h2>
        Álbuns de:
        {' '}
        {valorPesquisa}
      </h2>
      <br />
      {postsState.musicas.results && (
        <Musicas musicas={ postsState.musicas.results } />
      )}
    </div>
  );
}

MusicasArtista.propTypes = {
  valorPesquisa: p.string.isRequired,
};

export default MusicasArtista;
