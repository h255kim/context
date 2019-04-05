import React, { Component } from 'react';

import Selections from './Selections';
import Home from './Home';
import Cosmos from './cosmos.png';
import Tulip from './tulip.png';
import Cactus from './cactus.png';

const data = [
  {
    id: 1,
    name: 'Cosmos',
    picture: Cosmos,
  },
  {
    id: 2,
    name: 'Tulip',
    picture: Tulip,
  },
  {
    id: 3,
    name: 'Cactus',
    picture: Cactus,
  }
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option1: 'Cosmos',
      option2: 'Tulip',
      option3: 'Cactus',
      style1: 'primary',
      style2: 'primary',
      style3: 'primary',
      selected: 'Cosmos',
    }
  }

  setToCosmos = () => {
    this.setState({
      selected: 'Cosmos'
    })
  }

  setToTulip = () => {
    this.setState({
      selected: 'Tulip'
    })
  }

  setToCactus = () => {
    this.setState({
      selected: 'Cactus'
    })
  }

  // changeColor = (flower) => {
  //   if (flower === 'Cosmos') {
      
  //   }
  // }

  render() {
    return (
      <div className="App" style={{ display: 'flex', flexDirection: 'column' }}>
        <Selections 
          cosmos={this.state.option1} 
          tulip={this.state.option2} 
          cactus={this.state.option3}
          cosmosStyle={this.state.style1}
          tulipStyle={this.state.style2}
          cactusStyle={this.state.style3}
          setToCosmos={this.setToCosmos}
          setToTulip={this.setToTulip}
          setToCactus={this.setToCactus} />
        <Home 
          //data={data} 
          selected={this.state.selected}
           />
      </div>
    );
  }
}

export default App;
