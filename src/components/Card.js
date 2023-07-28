import React from "react";
import SemCirChild from "./SemCirChild";
import Stats from "./Stats";

function Card(props) {
  return (
    <div id="card">
      <div id="halfCircle" style={{ backgroundColor: props.halfCircleStyle }}>
        <SemCirChild id="HP" headingContent="HP" paragraphContent={props.HP} />
        <SemCirChild id="ID" headingContent="#" paragraphContent={props.ID} />
      </div>
      <div id="pokemon">
        <img
          src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${props.pokemonId}.svg`}
          onError={(e) =>
            (e.target.src = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${
              props.pokemonId >= 100
                ? props.pokemonId
                : props.pokemonId >= 10 && props.pokemonId < 100
                ? "0" + props.pokemonId
                : "00" + props.pokemonId
            }.png`)
          }
          alt={props.alt}
        />
        <h2>{props.pokemonName}</h2>
      </div>
      <div id="typesContainer">{props.typesArray}</div>
      <div id="weakAgainst">
        <h4>{props.h4Content}</h4>
        <div id="weakTypes">{props.weakTypesArray}</div>
      </div>
      <div id="statsContainer">
        <Stats base_stats={props.Attack} statName="Attack" />
        <Stats base_stats={props.Defense} statName="Defense" />
        <Stats base_stats={props.Speed} statName="Speed" />
      </div>
    </div>
  );
}

export default Card;
