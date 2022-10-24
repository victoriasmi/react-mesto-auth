import React from 'react';
export default function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <button className="popup__close" type="button" onClick={props.onClose}></button>
        <form className={`popup__form popup__form_type_${props.name}`} name="name" onSubmit={props.onSubmit} noValidate>
          <h2 className="popup__title">{props.title}</h2>
          {props.children}
          <button className="popup__save" type="submit">{props.buttonText}</button>
        </form>
      </div>
    </div>
  );
}
