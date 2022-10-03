import React from 'react';
export default function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <button className="popup__close" type="button" onClick={props.onClose}></button>
        <form className={`popup__form popup__form_type_${props.name}`} name="name" novalidate>
          <h2 className="popup__title">{props.title}</h2>
          {props.children}
          <button className="popup__save popup__save_type_editAvatar" type="submit">Сохранить</button>
        </form>
      </div>
    </div>
  );
}
