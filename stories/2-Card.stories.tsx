import React from "react";
import { Card } from "../src/components/Card/Card";

export default {
  title: "Card",
  component: Card,
};

export const SomeCard = () => (
  <Card name="Some card" content="Content of some card" />
);

export const AnotherCard = () => (
  <Card name="Another card" content="Content of another card" />
);
