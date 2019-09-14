import React from "react";
import { formatCash } from "../utils";

const Info = props => {
  return (
    <div className="Info__container">
      <p>{`Money per Click: £${formatCash(props.cashClick) || 0}`}</p>
      <p>{`Money Per Second: £${formatCash(props.cashSec) || 0}`}</p>
    </div>
  );
};

export default Info;
