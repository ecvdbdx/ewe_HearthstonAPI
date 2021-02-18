import React from "react";
import "./Filter.css";

function Filter(props) {
  const { cardSets, checked, check } = props;

  const filters = cardSets.map((cardSet) => (
    <li className="filter-container">
      <p>{cardSet}</p>
      <input
        type="checkbox"
        name={cardSet}
        checked={checked === cardSet}
        onChange={() => check(cardSet)}
        key={cardSet}
      />
    </li>
  ));

  return <ul>{filters}</ul>;
}

export default Filter;
