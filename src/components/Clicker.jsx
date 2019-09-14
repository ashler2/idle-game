import React from "react";

const Clicker = props => {
  return (
    <div>
      <button onClick={() => props.click()}>Steal</button>
    </div>
  );
};

export default Clicker;
