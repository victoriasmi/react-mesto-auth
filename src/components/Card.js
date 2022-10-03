import React from 'react';
export default function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }
  return (
    <li className="element">
      <div className="element__top">
        <button className="element__delete-button" type="button"></button>
        <img className="element__image" src={props.card.link} alt={props.card.title} onClick={handleClick} />
      </div>
      <div className="element__bottom">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like-block">
          <button className="element__like-button" type="button"></button>
          <p className="element__like-array">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  )
}