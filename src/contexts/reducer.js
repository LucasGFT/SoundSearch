const reducer = (state, action) => {
  switch (action.type) {
  case 'loadMusicas': {
    return { ...state, musicas: action.payload };
  }

  case 'sendUser': {
    return { ...state, usuario: action.payload };
  }

  case 'loadMusica': {
    return { ...state, musica: action.payload };
  }

  case 'addFavorite': {
    localStorage.setItem(
      'favorite_songs',
      JSON.stringify([...state.favoritos, action.payload]),
    );
    return { ...state, favoritos: [...state.favoritos, action.payload] };
  }

  case 'rmFavorite': {
    localStorage.setItem(
      'favorite_songs',
      JSON.stringify(action.payload),
    );
    return { ...state, favoritos: action.payload };
  }

  case 'createUser': {
    localStorage.setItem('user_tune', JSON.stringify(action.payload));
    return { ...state, usuario: action.payload };
  }
  default:
    return { ...state };
  }
};

export default reducer;
export { reducer };
