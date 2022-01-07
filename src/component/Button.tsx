import React from "react";

interface Props {
  onClick: (num: number) => void;
}

const Button = (props: Props) => {
  const handleClick = (count: number) => {
    props.onClick(count);
  };

  return (
    <div>
      <button onClick={() => handleClick(1)}>ADD</button>
      <button onClick={() => handleClick(-1)}>REDUCE</button>
    </div>
  );
};

export default Button;
