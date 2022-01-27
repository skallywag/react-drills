import React from "react";

function Image(props) {
  console.log(props);
  return (
    <div>
      <img src={props.src} alt="" />
      <img src={props.src} alt="" />
    </div>
  );
}

export default Image;
