import React from "react";

function Stats(props) {
  return (
    <div id={props.statName}>
      <h3>{props.base_stats}</h3>
      <p>{props.statName}</p>
    </div>
  );
}

export default Stats;
