import React, { useEffect, useState } from "react";
import typeColors from "./components/typeColors";
import Card from "./components/Card";
import Button from "./components/Button";
import "./App.css";

function App() {
  const [pokemonInput, setPokemonInput] = useState("");
  const [pokemonData, setPokemonData] = useState();
  const [typesData, setTypesData] = useState();
  const [pokemon, setPokemon] = useState(0o1);

  const randomId = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  useEffect(() => {
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    fetch(pokemonUrl)
      .then((res) => res.json())
      .then((data) => setPokemonData(data));
  }, [pokemon]);

  useEffect(() => {
    const name = pokemonData ? pokemonData.types[0].type.name : "grass";
    const typesUrl = `https://pokeapi.co/api/v2/type/${name}/`;

    fetch(typesUrl)
      .then((res) => res.json())
      .then((data) => {
        setTypesData(data);
      });
  }, [pokemonData]);

  const generateEvent = () => {
    setPokemon(randomId(1, 649));
  };

  const pokemonInpChange = (e) => setPokemonInput(e.target.value);

  const submitPokemonName = (e) => {
    e.preventDefault();
    setPokemon(pokemonInput.toLowerCase());
    setPokemonInput("");
  };

  return (
    <>
      <main id="appContainer">
        <form onSubmit={submitPokemonName}>
          <input
            id="pokemonInput"
            type="text"
            placeholder="Enter Pokemon"
            value={pokemonInput}
            onChange={pokemonInpChange}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
          />
        </form>
        <Card
          h4Content="Weak Against"
          imgSrc={
            pokemonData && pokemonData.sprites.other.dream_world.front_default
          }
          pokemonName={pokemonData && pokemonData.name}
          typesArray={
            pokemonData &&
            pokemonData.types.map((element, index) => {
              return (
                <div
                  className="types"
                  key={index}
                  style={{ backgroundColor: typeColors[element.type.name] }}
                >
                  {element.type.name}
                </div>
              );
            })
          }
          weakTypesArray={
            typesData &&
            typesData.damage_relations.double_damage_from.map(
              (element, index) => {
                return (
                  <div
                    className="types"
                    key={index}
                    style={{ backgroundColor: typeColors[element.name] }}
                  >
                    {element.name}
                  </div>
                );
              }
            )
          }
          halfCircleStyle={
            pokemonData && typeColors[pokemonData.types[0].type.name]
          }
          Attack={pokemonData && pokemonData.stats[1].base_stat}
          Defense={pokemonData && pokemonData.stats[2].base_stat}
          Speed={pokemonData && pokemonData.stats[5].base_stat}
          HP={pokemonData && pokemonData.stats[0].base_stat}
          ID={
            typeof pokemon === "number"
              ? pokemon >= 100
                ? pokemon
                : pokemon >= 10 && pokemon < 100
                ? "0" + pokemon
                : "00" + pokemon
              : pokemonData &&
                (pokemonData.id >= 100
                  ? pokemonData.id
                  : pokemonData.id >= 10 && pokemonData.id < 100
                  ? "0" + pokemonData.id
                  : "00" + pokemonData.id)
          }
          alt={pokemonData && pokemonData.name}
        />
        <Button btnContent="Generate" clickEvent={generateEvent} />
      </main>
    </>
  );
}

export default App;

// https://assets.pokemon.com/assets/cms2/img/pokedex/full/475.png

// https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/87.svg

// If you want to fetch data only when a certain action occurs, like clicking a button or some other event, you can directly call the API inside the event handler or function related to that action.

// Fetching data on user interaction: If you need to fetch data in response to a user interaction, like clicking a button, you do not necessarily need useEffect. You can directly call the function to fetch data inside the event handler or function related to the user interaction
