import { Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import Search from '../pages/Search';
import Album from '../pages/Album';
import Favorites from '../pages/Favorites';
import Profile from '../pages/Profile';
import ProfileEdit from '../pages/ProfileEdit';
import NotFound from '../pages/NotFound';

function DefaultLayout() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/TrybeTunes/search" component={ Search } />
        <Route exact path="/TrybeTunes/album/:id" component={ Album } />
        <Route exact path="/TrybeTunes/favorites" component={ Favorites } />
        <Route exact path="/TrybeTunes/profile" component={ Profile } />
        <Route exact path="/TrybeTunes/profile/edit" component={ ProfileEdit } />
        <Route component={ NotFound } />
      </Switch>
    </>
  );
}

export default DefaultLayout;
