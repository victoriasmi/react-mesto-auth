import React, { useState } from 'react';
import PopupWithForm from './PopupWithForm';

export default function EditAvatarPopup(props) {

  const [profileAvatar, setProfileAvatar] = useState("");
  const avatar = React.useRef(null);

  function handleAvatarChange(e){
    setProfileAvatar(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const avatarCurrent = avatar.current.value
    props.onUpdateAvatar({
      avatar: avatarCurrent
    });
  }

  return (
    <PopupWithForm
      name="editAvatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      children={
        <>
          <input className="popup__input popup__input_avatar_link" id="avatar-link-input" type="url" name="link"
            placeholder="Ссылка" ref={avatar} onChange={handleAvatarChange} required />
          <span className="avatar-link-input-error error"></span>
        </>
      }
    />
  );
}