import React, { useContext, useRef } from 'react';
import SoundSearchContext from '../contexts/context';
import CardMusicaResultSearch from '../components/cardMusicas/CardMusica';

function Favorites() {
  const context = useContext(SoundSearchContext);
  const { postsState } = context;
  const musicasFavoritas = useRef(postsState.favoritos);

  return (
    <div data-testid="page-favorites">
      {musicasFavoritas.current.length === 0 ? (
        <div>Não contem nenhuma musica como favorita</div>
      ) : (
        <CardMusicaResultSearch />
      )}
    </div>
  );
}
export default Favorites;
