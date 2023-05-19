import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import MusicCard from '../components/MusicCard';
import TrybeTunesContext from '../contexts/context';
import { getMusics } from '../contexts/actions';
import Carregando from '../components/Carregando';

function Album() {
  const [carregando, setCarregamento] = useState(false);
  const context = useContext(TrybeTunesContext);
  const { postsState, postsDispatch } = context;
  const { location: { pathname } } = useHistory();
  const id = pathname.split('/').pop();

  useEffect(() => {
    setCarregamento(true);
    const fetchData = async () => {
      await getMusics(postsDispatch, id).then((dispatch) => dispatch());
    };
    setCarregamento(false);
    fetchData();
  }, [id, postsDispatch]);

  return (
    <div data-testid="page-album">
      {carregando ? (
        <Carregando />
      ) : (
        postsState.musica.length > 0 && (
          <>
            <div className="descricao-musica">
              <h3 data-testid="album-name">
                {`Album: ${postsState.musica[0].collectionName}`}

              </h3>
              <h4>
                {`Artista(s): ${postsState.musica[0].artistName}`}
              </h4>
            </div>
            <div className="todas-musica-album">
              {postsState.musica.slice(1).map((element, index) => (
                <MusicCard musica={ element } key={ index + 1 } />
              ))}
            </div>
          </>
        )
      )}
    </div>
  );
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Album;
