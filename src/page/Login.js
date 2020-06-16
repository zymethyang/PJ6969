import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { useHistory } from 'react-router-dom';

import LoginForm from '../layout/LoginForm';


function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const { store } = props;

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
    history.replace('/');
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
