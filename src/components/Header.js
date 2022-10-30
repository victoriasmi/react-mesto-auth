import React from "react";
import { useHistory } from "react-router-dom";
import { Link, Route, Switch } from "react-router-dom";
import logo from '../images/logo.svg';


export default function Header({ email }) {
  const history = useHistory();

  function handleLogOut() {
    localStorage.removeItem("token");
    history.push("/signin");
  }

  return (
    <header className="header header_type_starter-page">
      <img className="header__logo" src={logo} alt="логотип" />
      <Switch>
        <Route path="/signin">
          <div className="header__info">
            <Link className="header__link" to="/signup">Зарегистрироваться</Link>
          </div>
        </Route>
        <Route path="/signup">
          <div className="header__info">
            <Link className="header__link" to="/signin">Войти</Link>
          </div>
        </Route>
        <Route path="/">
          <div className="header__info">
            <p className="header__paragraph">{email}</p>
            <Link
              className="header__link"
              to="/signin"
              onClick={handleLogOut}
            >
              Выйти
            </Link>
          </div>
        </Route>
      </Switch>
    </header>
  );
}





