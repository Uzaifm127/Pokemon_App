import React from "react";

function Button(props) {
  return (
    <button id="Generate" type="button" onClick={props.clickEvent}>
      {props.btnContent}
    </button>
  );
}

export default Button;
