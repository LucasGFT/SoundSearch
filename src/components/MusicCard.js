import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { addFavorite, rmFavorite } from '../contexts/actions';
import SoundSearchContext from '../contexts/context';

function MusicCard({ musica }) {
  const context = useContext(SoundSearchContext);
  const { postsState, postsDispatch } = context;
  const [musicaFavoritada, setMusicaFavoritada] = useState(false);

  const removeFavorite = () => {
    const asss = postsState.favoritos.findIndex((mus) => mus.trackId === musica.trackId);
    const musicas = postsState.favoritos;
    musicas.splice(asss, 1);
    rmFavorite(postsDispatch, musicas).then((dispatch) => dispatch());
    setMusicaFavoritada(false);
  };

  const addFavorites = () => {
    addFavorite(postsDispatch, musica).then((dispatch) => dispatch());
  };

  useEffect(() => {
    postsState.favoritos.filter((elem) => {
      if (elem.trackId === musica.trackId) {
        setMusicaFavoritada(true);
        return true;
      }
      return false;
    });
  }, [musica, postsState.favoritos]);

  return (
    <div>
      <div className="audioButton">
        <h5>{musica.trackName}</h5>
        <audio data-testid="audio-component" src={ musica.previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          <code>audio</code>
          .
        </audio>
        {musicaFavoritada ? (
          <button
            className="buttonDesfavoritarMusica"
            onClick={ removeFavorite }
            type="button"
          >
            Desfavoritar

          </button>
        ) : (
          <button
            type="button"
            className="buttonFavoritarMusica"
            onClick={ addFavorites }
          >
            Favoritar
          </button>
        )}
      </div>
    </div>
  );
}

MusicCard.propTypes = {
  musica: PropTypes.shape().isRequired,
};

export default MusicCard;
