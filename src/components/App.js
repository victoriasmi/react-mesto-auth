import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

export default function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }


  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
  }

  return (
      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onEditProfile={handleEditProfileClick}
          handleCardClick={(card) => {
            setSelectedCard(card);
          }}
        />
        <Footer />
        <PopupWithForm
          name="edit"
          title="Редактировать профиль"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          buttonText="Сохранить"
          children={
            <>
              <input className="popup__input popup__input_info_name" id="name-input" type="text" name="name" placeholder="Имя"
                minLength="2" maxLength="40" required />
              <span className="name-input-error error"></span>
              <input className="popup__input popup__input_info_occupation" id="occupation-input" type="text" name="about"
                placeholder="О Себе" minLength="2" maxLength="200" required />
              <span className="error occupation-input-error"></span>
            </>
          }
        />
        <PopupWithForm
          name="add"
          title="Новое место"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          buttonText="Сохранить"
          children={
            <>
              <input className="popup__input popup__input_card_place" id="place-input" type="text" name="name"
                placeholder="Название" minLength="2" maxLength="30" required />
              <span className="place-input-error error"></span>
              <input className="popup__input popup__input_card_link" id="link-input" type="url" name="link" placeholder="Ссылка"
                required />
              <span className="link-input-error error"></span>
            </>
          }

        />
        <PopupWithForm
          name="editAvatar"
          title="Обновить аватар"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          buttonText="Сохранить"
          children={
            <>
              <input className="popup__input popup__input_avatar_link" id="avatar-link-input" type="url" name="link"
                placeholder="Ссылка" required />
              <span className="avatar-link-input-error error"></span>
            </>
          }
        />

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />

      </div>
  );
}





