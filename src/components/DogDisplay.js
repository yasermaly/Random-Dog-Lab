import React from "react";

const Dogs = (props) => {
  return (
    <div>
      <img src={props.dog.message} alt="" />;
    </div>
  );
};

export default Dogs;
