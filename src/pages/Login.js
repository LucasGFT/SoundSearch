import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import FormLogin from '../components/forms/formLogin/FormLogin';

function Login() {
  const [user] = useState(JSON.parse(localStorage.getItem('user_tune')));

  return (
    <div data-testid="page-login">
      {user && <Redirect to="/SoundSearch/search" />}
      <FormLogin />
    </div>
  );
}

export default Login;
