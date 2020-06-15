import React, { useState, useEffect } from 'react';
import { MobXProviderContext, observer } from 'mobx-react';

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

  if (store.authStore.userInfo.uid && store.authStore.userInfo.uid !== 'loading') {
    window.location.href = '/';
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

export default observer(Login);
