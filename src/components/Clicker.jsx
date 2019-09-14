import React from "react";

const Clicker = props => {
  return (
    <div className="Clicker__container">
      <button onClick={() => props.click()}>Steal</button>
    </div>
  );
};

export default Clicker;
