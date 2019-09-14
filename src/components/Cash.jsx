import React from "react";
import { formatCash } from "../utils";
const Cash = props => {
  return (
    <div className="CurrentMoney__container">
      <h2>{`Current Money: £${formatCash(props.cash)}`}</h2>
    </div>
  );
};

export default Cash;
