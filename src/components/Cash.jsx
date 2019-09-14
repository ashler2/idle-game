import React from "react";

const Cash = props => {
  return (
    <div>
      <p>{`Current Money: ${props.cash}`}</p>
      <p>{`Money per Click ${props.cashClick || 0}`}</p>
      <p>{`Money Per Second: ${props.cashSec || 0}`}</p>
    </div>
  );
};

export default Cash;
