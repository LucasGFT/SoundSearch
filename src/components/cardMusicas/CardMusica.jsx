import { useContext, useRef } from 'react';
import SoundSearchContext from '../../contexts/context';
import { rmFavorite } from '../../contexts/actions';

function CardMusicaResultSearch() {
  const context = useContext(SoundSearchContext);
  const { postsState, postsDispatch } = context;
  const musicasFavoritas = useRef(postsState.favoritos);

  const removeMusicaFavorite = (musica) => {
    const asss = postsState.favoritos.findIndex((mus) => mus.trackId === musica.trackId);
    const musicas = postsState.favoritos;
    musicas.splice(asss, 1);
    rmFavorite(postsDispatch, musicas).then((dispatch) => dispatch());
  };
  return (
    <>
      <div className="tituloFavorites">
        <h2>Musicas Salvadas como Favoritas</h2>
      </div>
      <div className="listaResultado">
        {musicasFavoritas.current !== null
                    && musicasFavoritas.current.map((element, index) => (
                      <div key={ `${element.artworkUrl100}${index}` }>
                        <span className="listaResultadoImg">
                          <img src={ element.artworkUrl100 } alt={ element.artistName } />
                        </span>
                        <h3>{`Nome: ${element.collectionName}`}</h3>
                        <h5>{`Artista ${element.artistName}`}</h5>
                        <h5>{element.artistName}</h5>
                        <audio
                          data-testid="audio-component"
                          src={ element.previewUrl }
                          controls
                        >
                          <track kind="captions" />
                          O seu navegador não suporta o elemento
                          {' '}
                          <code>audio</code>
                          .
                        </audio>
                        <span className="listaResultadoButton">
                          <button
                            type="button"
                            onClick={ () => removeMusicaFavorite(element) }
                          >
                            Remover dos Favoritos
                          </button>
                        </span>
                      </div>
                    ))}
      </div>
    </>
  );
}

export default CardMusicaResultSearch;
