import React from 'react';
import Axios from 'axios';
import './App.css';
import DisplayQuotes from './components/DisplayQuotes';

const sampleQuote = [
  {
    quote: "I'm sleeping in the bath tub.",
    character: "Marge Simpson",
    image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMargeSimpson.png?1497567512205",
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(sampleQuote)
    this.state = {
      quoteData: sampleQuote[0],
    }
  }

  getQuote = () => {
    Axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          quoteData: data[0],
        })
      })
  }

  render = () => {
    return (
      <div className="App">
        <DisplayQuotes quoteData={this.state.quoteData} />
        <button type="button" onClick={this.getQuote}>Get quote</button>
      </div>
    )
  }
}

export default App;
