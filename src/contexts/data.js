export default {
  favoritos: JSON.parse(localStorage.getItem('favorite_songs')) || [],
  musicas: [],
  loading: false,
  usuario: JSON.parse(localStorage.getItem('user_tune')) || {
    nome: '',
    email: '',
  },
  musica: [],
};
