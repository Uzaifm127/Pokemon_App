import React from "react";
import SemCirChild from "./SemCirChild";
import Stats from "./Stats";

function Card({
  halfCircleStyle,
  HP,
  ID,
  imgSrc,
  pokemonName,
  weakTypesArray,
  Attack,
  Defense,
  Speed,
  h4Content,
  alt,
  typesArray,
}) {
  return (
    <div id="card">
      <div id="halfCircle" style={{ backgroundColor: halfCircleStyle }}>
        <SemCirChild id="HP" headingContent="HP" paragraphContent={HP} />
        <SemCirChild id="ID" headingContent="#" paragraphContent={ID} />
      </div>
      <div id="pokemon">
        <img
          src={imgSrc}
          alt={alt}
        />
        <h2>{pokemonName}</h2>
      </div>
      <div id="typesContainer">{typesArray}</div>
      <div id="weakAgainst">
        <h4>{h4Content}</h4>
        <div id="weakTypes">{weakTypesArray}</div>
      </div>
      <div id="statsContainer">
        <Stats base_stats={Attack} statName="Attack" />
        <Stats base_stats={Defense} statName="Defense" />
        <Stats base_stats={Speed} statName="Speed" />
      </div>
    </div>
  );
}

export default Card;
