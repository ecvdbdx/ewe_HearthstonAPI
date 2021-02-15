import { Component } from 'react';
import Card from './Card'
import './App.css';

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
    }
  }

  componentDidMount() {
    fetch('https://omgvamp-hearthstone-v1.p.rapidapi.com/cards', options)
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

    console.log(items)
    if (!isLoaded) {
      return <div>Chargement…</div>;
    }
    else {
      const cards = items["The Boomsday Project"];
    
      return (
        <div className="App">
          {
            <ul>{
              cards.map((card, i)=>{
                console.log('test')
                return <Card {...card} />
              })}
            </ul>
          }
        </div>
      );
    }
  }
}
  

export default App;
