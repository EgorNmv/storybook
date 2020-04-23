import React from "react";
import "./Card.sass";
import "./Card.css";
import "./Card.less";
import "./Card.scss";

type CardProp = {
  content: string;
  name: string;
};

export const Card: React.FC<CardProp> = ({ content, name }) => (
  <div className="card">
    <div className="card-header">{name}</div>
    <div className="card-body">{content}</div>
  </div>
);
