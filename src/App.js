import { Component } from 'react';
import './App.css';
import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards',
  headers: {
    'x-rapidapi-key': '99159ac5b3msh914e3005ac550fap1b5585jsn1a02871e2793',
    'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
console.log(options);
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch('https://omgvamp-hearthstone-v1.p.rapidapi.com/info')
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

    if (!isLoaded) {
      return <div>Chargement…</div>;
    }
    else {
      return (
        <div className="App">
          Data hs
        </div>
      );
    }
  }
}
  

export default App;
