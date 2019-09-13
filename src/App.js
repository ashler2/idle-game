import React from "react";

import "./App.css";
import Cash from "./components/Cash";

class App extends React.Component {
  state = {
    cash: 0
  };
  render() {
    return (
      <div className="App">
        <Cash cash={this.state.cash}></Cash>
      </div>
    );
  }
}

export default App;
