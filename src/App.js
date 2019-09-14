import React from "react";

import "./App.css";
import Cash from "./components/Cash";
import Clicker from "./components/Clicker";
import Upgrade from "./components/Upgrade";
import { upgrades } from "./components/upgradesArray";
class App extends React.Component {
  state = {
    cash: 0,
    clickerLevel: 0,
    perSecond: 0,
    buyMultiplier: 1,
    saveObj: {}
  };
  componentDidMount() {
    setInterval(this.cashPerSecond, 1000);
    window.onbeforeunload = () => {
      const obj = this.state.saveObj;
      localStorage.setItem("gameSession", JSON.stringify(obj));
    };
  }
  render() {
    return (
      <div className="App">
        <Cash
          cash={this.state.cash}
          cashClick={1}
          cashSec={this.state.perSecond}
        ></Cash>
        <Clicker click={this.click}></Clicker>
        <div className="upgrades">
          {upgrades.map((item, index) => {
            return (
              <Upgrade
                key={index}
                spend={this.spend}
                cash={this.state.cash}
                update={this.updatePerSecond}
                perSecond={item.perSecond}
                name={item.name}
                startCost={item.startCost}
                save={this.buildSaveObj}
              ></Upgrade>
            );
          })}
        </div>
      </div>
    );
  }
  click = () => {
    this.setState({ cash: this.state.cash + (1 + this.state.clickerLevel) });
  };
  spend = cost => {
    this.setState({ cash: this.state.cash - cost });
  };
  updatePerSecond = perSecond => {
    this.setState({ perSecond: this.state.perSecond + perSecond });
  };
  cashPerSecond = () => {
    this.setState({ cash: this.state.cash + this.state.perSecond });
  };
  buildSaveObj = (key, value) => {
    const obj = this.state.saveObj;

    if (!obj[key]) {
      obj[key] = { ...value };
    } else {
      obj[key] = { ...value };
    }
    return obj;
  };
  saveObj = obj => {
    this.setState({ saveObject: obj });
  };
}

export default App;
