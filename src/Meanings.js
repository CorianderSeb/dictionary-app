import React from "react";
import Synonyms from "./Synonyms.js";
import "./Meanings.css";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="definition">{definition.definition}</div>
            <div className="example">{definition.example}</div>
          </div>
        );
      })}
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
