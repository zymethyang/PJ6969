import React from 'react';

function LoginForm(props) {
  const { onChange, onPressSignIn, onPressSignUp } = props;
  return (
    <form className="form__container">
      <label
        htmlFor="item-name-input"
        className="form__username--label gray"
      >
        Email
      </label>
      <input
        className="form__username--input"
        name="email"
        type="text"
        onChange={onChange}
      />
      <label
        className="form__password--label gray"
        htmlFor="item-price-input"
      >
        Password
      </label>
      <input
        className="form__password--input"
        name="password"
        type="password"
        onChange={onChange}
      />
      <button
        className="form__signin"
        type="button"
        onClick={() => onPressSignIn()}
      >
        Đăng nhập
      </button>
      <button
        className="form__signup"
        type="button"
        onClick={() => onPressSignUp()}
      >
        Đăng ký
      </button>
    </form>
  )
}

export default LoginForm;
