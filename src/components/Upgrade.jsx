import React from "react";

class Upgrade extends React.Component {
  state = {
    quantity: 0,
    perSecond: 0,
    multiplier: 0,
    name: this.props.name,
    cost: this.props.startCost,
    costMultiplier: 1.2,
    saveObj: {}
  };
  componentDidMount() {
    const { saveObj } = this.props;
    this.setState({
      perSecond: saveObj !== undefined ? saveObj.perSecond : 0,
      quantity: saveObj !== undefined ? saveObj.quantity : 0,
      cost: saveObj !== undefined ? saveObj.cost : this.props.startCost
    });
  }
  render() {
    const { quantity, perSecond, cost } = this.state;
    return (
      <div>
        <p>{` ${quantity} ${this.props.name.split("_").join(" ")} `}</p>
        <p> IMG to go here</p>
        <p> Multipliers to go heres</p>
        <p>{`Per second: ${perSecond} `}</p>
        <p>{`Cost: ${cost}`}</p>
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

  componentDidUpdate = (prevProps, prevState) => {
    this.props.save(this.props.name, this.state);
  };
}

export default Upgrade;
