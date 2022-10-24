import React, { useState } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function AddPlacePopup(props) {

  const [cardName, setCardName] = useState("");
  const [cardLink, setCardLink] = useState("");

  function handleCardNameChange(e) {
    setCardName(e.target.value);
  }

  function handleCardLinkChange(e) {
    setCardLink(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props.onAddPlace({
      name: cardName,
      link: cardLink
    });
  }

  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      children={
        <>
          <input className="popup__input popup__input_card_place" id="place-input" type="text" name="name"
            placeholder="Название" minLength="2" maxLength="30" onChange={handleCardNameChange} required />
          <span className="place-input-error error"></span>
          <input className="popup__input popup__input_card_link" id="link-input" type="url" name="link" placeholder="Ссылка"
            onChange={handleCardLinkChange} required />
          <span className="link-input-error error"></span>
        </>
      }

    />
  );
}