import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Lue maantiedon kokeisiin",
        completed: true
      },

      {
        id: 2,
        title: "Käytä koiraa ulkona",
        completed: false
      },

      {
        id: 3,
        title: "Mene sählytreeneihin",
        completed: false
      }
    ]
  }
  
  render(){
    return (
      <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
