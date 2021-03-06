import React from "react";
import "./Card.css";

function Cards(props) {
  const { name, cardSet, flavor, img } = props;

  const image = img && <img alt="card-desc" src={img} />;
  if (image === undefined) {
    return (
      <li className="card">
        <b>{name}</b> {cardSet} {flavor}
      </li>
    );
  } else {
    return <li>{image}</li>;
  }
}

export default Cards;
