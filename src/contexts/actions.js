const loadMusicas = async (dispatch, artistNameURL) => {
  const getAlbumsAPI = `https://itunes.apple.com/search?entity=album&term=${artistNameURL}&attribute=allArtistTerm`;

  const APIResponse = await fetch(getAlbumsAPI);
  const musicas = await APIResponse.json();
  return () => dispatch({ type: 'loadMusicas', payload: musicas });
};

const getMusics = async (dispatch, id) => {
  const request = await fetch(`https://itunes.apple.com/lookup?id=${id}&entity=song`);
  const requestJson = await request.json();
  return () => dispatch({ type: 'loadMusica', payload: requestJson.results });
};

const getUser = async (dispatch, name) => () => dispatch({
  type: 'sendUser', payload: name });

const addFavorite = async (dispatch, musica) => () => dispatch({
  type: 'addFavorite', payload: musica });

const rmFavorite = async (dispatch, arrayMusicas) => () => dispatch({
  type: 'rmFavorite',
  payload: arrayMusicas,
});

const createUser = async (dispatch, arrayUser) => () => dispatch({
  type: 'createUser',
  payload: arrayUser,
});

export default loadMusicas;
export { loadMusicas, getUser, getMusics, addFavorite, rmFavorite, createUser };
