import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';

function LoginLayout() {
  return (
    <Switch>
      <Route exact path="/TrybeTunes" component={ Login } />
      <Route component={ NotFound } />
    </Switch>
  );
}

export default LoginLayout;
