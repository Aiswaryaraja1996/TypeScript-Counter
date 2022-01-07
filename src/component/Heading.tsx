import React from "react";

interface Props {
  title: string;
}

const Heading = (props: Props) => {
  return (
    <div>
      <h2>{props.title}</h2>
    </div>
  );
};

export default Heading;
