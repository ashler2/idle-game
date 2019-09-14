// @flow
import React from "react";
import { async } from "q";

class Upgrade extends React.Component {
  state = {
    quantity: 0,
    perSecond: 0,
    multiplier: 0,
    name: "test",
    cost: this.props.startCost,
    costMultiplier: 1.2
  };
  render() {
    return (
      <div>
        <p>{` ${this.state.quantity} ${this.props.name} `}</p>
        <p> IMG to go here</p>
        <p> Multipliers to go heres</p>
        <p>{`Per second: ${this.state.perSecond} `}</p>
        <p>{`Cost: ${this.state.cost}`}</p>
        <button
          onClick={() => {
            this.buy();
          }}
        >
          Buy
        </button>
      </div>
    );
  }
  buy = async () => {
    if (this.props.cash >= this.state.cost) {
      this.props.spend(this.state.cost);
      await this.setState({
        quantity: (this.state.quantity += 1),
        cost: Math.ceil((this.state.cost *= this.state.costMultiplier)),
        perSecond: (this.state.perSecond += this.props.perSecond)
      });
      this.props.update(this.props.perSecond);
    }
  };
}

export default Upgrade;
