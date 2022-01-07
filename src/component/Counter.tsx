import React, { useState } from "react";
import Heading from "./Heading";
import Button from "./Button";

interface Props {}

const Counter = (props: Props) => {
  const [val, setVal] = useState(0);
  const handleClick = (num: number) => {
    setVal(val + num);
  };
  return (
    <div>
      <Heading title="Simple Counter" />
      <h2>{val}</h2>
      <Button onClick={handleClick} />
    </div>
  );
};

export default Counter;
