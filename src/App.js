import { Component } from "react";
import Card from "./Card";
import Filter from "./Filter";
import "./App.css";
import "./Card.css";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "99159ac5b3msh914e3005ac550fap1b5585jsn1a02871e2793",
    "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
  },
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
      isLoaded: false,
      checked: "Wild Event",
      data: undefined,
    };
    this.check = this.check.bind(this);
  }

  check(cardSet) {
    this.setState((state) => ({
      checked: state.checked === cardSet ? "" : cardSet,
    }));
  }

  componentDidMount() {
    fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards", options)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
          checked: "Wild Event",
        });
      });
  }

  render() {
    let { isLoaded, items, checked } = this.state;

    if (!isLoaded) {
      return <div>Chargement…</div>;
    } else {
      const cardSets = Object.keys(items);
      const cards = Object.values(items).flat();

      const displayedCards = cards.filter((card) => card.cardSet === checked);
      return (
        <div className="App">
          {
            <div>
              <ul className="cards">
                {displayedCards.map((card) => (
                  <Card {...card} checked={checked} key={card.cardId} />
                ))}
              </ul>

              <ul className="filters">
                {
                  <Filter
                    cardSets={cardSets}
                    key={cardSets}
                    checked={checked}
                    check={this.check}
                  />
                }
              </ul>
            </div>
          }
        </div>
      );
    }
  }
}

export default App;
