import React from "react";

function Card(props) {
  return (
    <div id="card">
      <div id="halfCircle" style={{ backgroundColor: props.halfCircleStyle }}>
        <div id="HP">
          <h4>HP</h4>
          <p>{props.HP}</p>
        </div>
      </div>
      <div id="pokemon">
        <img
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${props.pokemonId}.png`}
          alt={props.alt}
        />
        <h2>{props.pokemonName}</h2>
      </div>
      <div id="typesContainer">{props.typesArray}</div>
      <div id="stats">
        <div id="attack">
          <h3>{props.Attack}</h3>
          <p>Attack</p>
        </div>
        <div id="defense">
          <h3>{props.Defense}</h3>
          <p>Defense</p>
        </div>
        <div id="speed">
          <h3>{props.Speed}</h3>
          <p>Speed</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
