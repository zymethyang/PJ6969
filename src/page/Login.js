import React, { useState } from 'react';
import LoginForm from '../layout/LoginForm';


function onPressSignIn() {

}

function onPressSignUp() {

}

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function onValueChange(e) {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setUsername(value);
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
        onPressSignIn={() => onPressSignIn()}
        onPressSignUp={() => onPressSignUp()}
      />
    </div>
  )
};

export default Login;
