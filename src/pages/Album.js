import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import MusicCard from '../components/MusicCard';
import SoundSearchContext from '../contexts/context';
import { getMusics } from '../contexts/actions';
import getMusicss from '../services/musicsAPI';
import Carregando from '../components/Carregando';

function Album() {
  const [carregando, setCarregamento] = useState(false);
  const [encontrouMusica, setEncontrouMusica] = useState(false);
  const context = useContext(SoundSearchContext);
  const { postsState, postsDispatch } = context;
  const { location: { pathname } } = useHistory();
  const id = pathname.split('/').pop();

  useEffect(() => {
    const fetchData = async () => {
      const requestJson = await getMusicss(id);
      if (!requestJson) return setEncontrouMusica(false);
      setEncontrouMusica(true);
      getMusics(postsDispatch, requestJson).then((dispatch) => dispatch());
      return true;
    };
    setCarregamento(true);
    fetchData();
    setCarregamento(false);
  }, [id, postsDispatch]);

  return (
    <div data-testid="page-album">
      {carregando ? (
        <Carregando />
      ) : (
        <>
          {!encontrouMusica && (
            <div>Não foi possível encontrar música</div>
          )}
          {encontrouMusica && postsState.musica.length > 0 && (
            <div className="descricao-musica">
              <h3 data-testid="album-name">
                {`Album: ${postsState.musica[0].collectionName}`}
              </h3>
              <h4>
                {`Artista(s): ${postsState.musica[0].artistName}`}
              </h4>
              <div className="todas-musica-album">
                {postsState.musica.slice(1).map((element, index) => (
                  <MusicCard musica={ element } key={ index + 1 } />
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Album;
