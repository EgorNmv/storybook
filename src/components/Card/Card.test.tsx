import React from "react";
import { render } from "@testing-library/react";
import { Card } from "./Card";

describe("Card component ", () => {
  const cardName: string = "Name";
  const cardContent: string = "Content";

  test("should be render with name and content", () => {
    const { queryByText } = render(
      <Card name={cardName} content={cardContent} />
    );

    expect(queryByText(cardName)).not.toBeNull();
    expect(queryByText(cardContent)).not.toBeNull();
    expect(queryByText(cardName)?.textContent).toBe(cardName);
    expect(queryByText(cardContent)?.textContent).toBe(cardContent);
  });
});
