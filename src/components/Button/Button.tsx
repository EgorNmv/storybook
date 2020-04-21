import React from "react";

type ButtonProps = {
  name: string;
  style?: object;
  clickHandler: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  name,
  style,
  clickHandler,
}) => (
  <button style={{ ...style }} onClick={clickHandler}>
    {name}
  </button>
);
