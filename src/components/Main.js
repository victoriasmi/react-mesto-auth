import { api } from '../utils/api';
import React from 'react';
import Card from './Card';

export default function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getProfileInfo()
      .then((userData) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }, []);

  React.useEffect(() => {
    api.getInitialCards()
      .then((cardsData) => {
        setCards(cardsData);
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info-block">
          <div className="profile__info">
            <img className="profile__pic" style={{ backgroundImage: `url(${userAvatar})` }} alt="аватар" onClick={props.onEditAvatar} />
            <img className="profile__pic-edit" alt="изменить" />
          </div>
          <div className="profile__text">
            <div className="profile__edit">
              <h1 className="profile__name">{userName}</h1><button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__occupation">{userDescription}</p>
          </div>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace} ></button>
      </section>
      <ul className="elements">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={props.handleCardClick}
            />
          ))}
      </ul>
    </main>
  );

}


