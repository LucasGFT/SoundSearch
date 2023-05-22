/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useReducer } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginLayout from './Layout/LoginLayout';
import data from './contexts/data';
import { reducer } from './contexts/reducer';
import './css/Style.css';
import SoundSearchContext from './contexts/context';
import DefaultLayout from './Layout/DefaultLayout';

function App() {
  const [postsState, postsDispatch] = useReducer(reducer, data);
  document.title = 'SoundSearch';

  return (
    <div>
      <div className="titulo">
        <h1>SoundSearch</h1>
      </div>
      <SoundSearchContext.Provider value={ { postsState, postsDispatch } }>
        <BrowserRouter>
          <Switch>
            <Route exact path="/SoundSearch" component={ LoginLayout } />
            <Route component={ DefaultLayout } />
          </Switch>
        </BrowserRouter>

      </SoundSearchContext.Provider>
    </div>
  );
}

export default App;
