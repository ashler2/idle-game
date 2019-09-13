import React from "react";

const Cash = props => {
  return (
    <div>
      <p>{`Current Money: ${props.cash}`}</p>
    </div>
  );
};

export default Cash;
