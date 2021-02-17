import { Component } from 'react';
import Card from './Card'
import Filters from './Filter'
import './App.css';
import './Card.css';

const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '99159ac5b3msh914e3005ac550fap1b5585jsn1a02871e2793',
    'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
  }
};



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
      isLoaded: false,
      selected: '',
      data: undefined,
    };
        this.select = this.select.bind(this);
  }
  select(cardSet) {
    this.setState(state => ({
      selected: state.selected === cardSet ? '' : cardSet,
    }));
  }

  componentDidMount() {
    fetch('https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/wild%20event', options)
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      });
  }
  
  render() {
    
    let { isLoaded, items } = this.state;
      const cardSet = ["The Boomsday Project"];

    console.log(items)
    if (!isLoaded) {
      return <div>
        <input type="text" value=''></input>
        
        Chargement…</div>;
    }
    else {
       const cards = items["Wild Event"];
      // const cards = items;
      return (
        <div className="App">
          {
            <ul className="cards">{
              cards.map((card, i)=>{
                console.log('test')
                return <Card {...card} />
              })}
            </ul>
          }
        <Filters types={cardSet} select={this.select} />
        </div>
      );
    }
  }
}
  

export default App;
