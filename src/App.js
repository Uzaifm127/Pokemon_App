import React, { useEffect, useState } from "react";
import axios from "axios";
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

    axios.get(pokemonUrl).then((response) => setPokemonData(response.data));
  }, [pokemon]);

  useEffect(() => {
    const name = pokemonData ? pokemonData.types[0].type.name : "grass";
    const typesUrl = `https://pokeapi.co/api/v2/type/${name}/`;
    axios.get(typesUrl).then((response) => setTypesData(response.data));
  }, [pokemonData]);

  const generateEvent = () => {
    setPokemon(randomId(1, 898));
  };

  const pokemonInpChange = (e) => setPokemonInput(e.target.value);

  const submitPokemonName = (e) => {
    e.preventDefault();
    setPokemon(pokemonInput.toLowerCase());
    setPokemonInput("");
  };

  const typeColors = {
    normal: "#A8A77A",
    fire: "#FF903E",
    water: "#0095ff",
    electric: "#F7D02C",
    grass: "#74E53F",
    ice: "#96D9D6",
    fighting: "#ed0900",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#533f31",
    steel: "#B7B7CE",
    fairy: "#D685AD",
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
          pokemonId={typeof pokemon === "number" ? pokemon : pokemonData.id}
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
