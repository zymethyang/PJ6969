import React, { useState } from 'react';
import { MobXProviderContext } from 'mobx-react';

import LoginForm from '../layout/LoginForm';


function useStores() {
  return React.useContext(MobXProviderContext)
}

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { store } = useStores();

  function onValueChange(e) {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  }

  return (
    <div className="login__container">
      <LoginForm
        onChange={(e) => onValueChange(e)}
        onPressSignIn={() => store.authStore.signIn({ email, password })}
        onPressSignUp={() => store.authStore.signUp({ email, password })}
      />
    </div>
  )
};

export default Login;
