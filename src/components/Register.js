import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link, useHistory } from 'react-router-dom';
import InfoTooltip from './InfoTooltip';

export default function Register(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  const resetForm = useCallback(() => {
    setEmail("");//только 1 вызов
    setPassword("");
  }, [])

  function handleRegister(e) {
    e.preventDefault();
    props.onRegister(email, password)
      .then(resetForm)
      .then(() => { history.push("/") })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleToolTipOnClick() {
    props.handleTooltip();
  }

  return (
    <>
      <InfoTooltip
        loggedIn={props.loggedIn}
        isOpen={props.isOpen}
        onClose={props.onClose}
      />
      <div className="starter-page">
        <p className="popup__title popup__title_type_starter-page">Регистрация</p>
        <form className="popup__form popup__form_type_starter-page" onSubmit={handleRegister} noValidate>
          <input className="popup__input popup__input_type_starter-page" id="email-input" type="email" name="email"
            placeholder="Email" minLength="2" maxLength="30" value={email ?? ""} onChange={handleEmailChange} required />
          <span className="email-input-error error"></span>
          <input className="popup__input popup__input_type_starter-page" id="password-input" type="text" name="password" placeholder="Пароль"
            value={password ?? ""} onChange={handlePasswordChange} required />
          <span className="password-input-error error"></span>
          <button className="popup__save popup__save_type_starter-page" type="submit" onClick={handleToolTipOnClick}>Зарегистрироваться</button>
          <div className="starter-page__signin">
            <p className="starter-page__signin-text">Уже зарегистрированы?&nbsp;</p>
            <Link to="/signin" className="starter-page__signin-link">Войти</Link>
          </div>
        </form>
      </div>
    </>
  );

}