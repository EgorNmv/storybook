import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Button } from "./Button";

describe("Button component ", () => {
  const name: string = "btn-name";

  test("should displayed with content text", () => {
    const { getByText } = render(
      <Button name={name} clickHandler={() => {}} />
    );

    expect(getByText(name)).toBeInTheDocument();
  });

  test("should call function onClick once", () => {
    const onClick = jest.fn();
    const { container } = render(
      <Button name={name} clickHandler={() => onClick()} />
    );

    const btn = container.firstChild;
    fireEvent.click(btn as Node);

    expect(onClick).toBeCalled();
    expect(onClick).toBeCalledTimes(1);
  });
});
