import React, { useContext, useEffect, useRef, useState } from 'react';
import Carregando from '../components/Carregando';
import SoundSearchContext from '../contexts/context';
import { loadMusicas } from '../contexts/actions';
import FormPesquisa from '../components/forms/formPesquisa/formPesquisa';
import MusicasArtista from '../components/musicasCard/MusicasArtista';

function Search() {
  const [nomeArtista, setNomeArtista] = useState('');
  const [valorPesquisa, setValorPesquisa] = useState('');
  const [isDisableButton, setIsDisableButton] = useState(true);
  const [carregamento, setCarregamento] = useState(false);
  const [resposta, setResposta] = useState(false);
  const context = useContext(SoundSearchContext);
  const { postsDispatch } = context;
  const inputRef = useRef(null);

  const haveChange = (event) => {
    const { target } = event;
    const { value } = target;
    setNomeArtista(value);
  };

  const clickButton = async () => {
    setCarregamento(true);
    setValorPesquisa(nomeArtista);
    await loadMusicas(postsDispatch, nomeArtista).then((dispatch) => dispatch());
    setResposta(true);
    setCarregamento(false);
  };

  useEffect(() => {
    if (nomeArtista.length > 2) {
      setIsDisableButton(false);
    } else {
      setIsDisableButton(true);
    }
  }, [nomeArtista]);

  return (
    <div data-testid="page-search">
      { carregamento === true ? (<Carregando />) : (
        <>
          <div className="formPesquisaArtista">
            <FormPesquisa
              nomeArtista={ nomeArtista }
              haveChange={ haveChange }
              inputRef={ inputRef }
              isDisableButton={ isDisableButton }
              clickButton={ clickButton }
            />
          </div>
          {resposta && (
            <MusicasArtista valorPesquisa={ valorPesquisa } />
          )}
        </>
      ) }
    </div>
  );
}

export default Search;
