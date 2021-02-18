import React from "react";

function Filter(props) {
  const { cardSets, checked, check } = props;

  const filters = cardSets.map((cardSet) => (
    <li>
      {cardSet}
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
