import React, { Component } from 'react';
import Citater from './Citater';
import Addcitat from './Addcitat';
import './style.scss';

class App extends Component {
  state = {
    citater : [
      {title: 'Citater om livet nummer 1', citattekst: 'Alt, hvad jeg ved, er, at jeg intet ved.', forfatter: 'Sokrates', id: 1},
      {title: 'Citater om livet nummer 2', citattekst: 'Find ikke fejl, find en løsning.', forfatter: 'Henry Ford', id: 2},
      {title: 'Citater om livet nummer 3', citattekst: 'Man skal ikke lade solen gå ned over sin vrede.', forfatter: 'Biblen – Efeserbrevet 4, 26', id: 3},
      {title: 'Citater om livet nummer 4', citattekst: 'Elsk alle, stol på nogle få, gør ondt mod ingen.', forfatter: 'William Shakespeare', id: 4},
      {title: 'Citater om livet nummer 5', citattekst: 'Vær dig selv, alle andre er alligevel optaget.', forfatter: 'Oscar Wilde', id: 5}
    ]
  }
  Addcitat = (citat) => {
    citat.id = Math.random();
    let citater = [...this.state.citater, citat];
    this.setState({
      citater: citater
    });
  }
  deletecitat = (id) => {
    let citater = this.state.citater.filter(citat => {
      return citat.id !== id
    });
    this.setState({
      citater: citater
    });
  }
  render () {
    return (
      <div className="App">
      <h1>my first citat</h1>
      <Citater citater={this.state.citater} deletecitat={this.deletecitat} />
        <Addcitat Addcitat={this.Addcitat} />
      </div>
    );
  }
}
export default App;
