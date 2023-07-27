import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";
import Button from "./components/Button";
import "./App.css";

function App() {
  const [apiData, setApiData] = useState();
  const [pokemonId, setPokemonId] = useState(0o1); // ask after

  const randomId = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
    axios.get(url).then((response) => setApiData(response.data));
  }, [pokemonId]);

  const generateEvent = () => {
    setPokemonId(randomId(1, 898));
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
        <Card
          pokemonId={
            pokemonId >= 100
              ? pokemonId
              : pokemonId >= 10 && pokemonId < 100
              ? "0" + pokemonId
              : "00" + pokemonId
          }
          pokemonName={apiData && apiData.name}
          typesArray={
            apiData &&
            apiData.types.map((element, index) => {
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
          halfCircleStyle={apiData && typeColors[apiData.types[0].type.name]}
          Attack={apiData && apiData.stats[1].base_stat}
          Defense={apiData && apiData.stats[2].base_stat}
          Speed={apiData && apiData.stats[5].base_stat}
          HP={apiData && apiData.stats[0].base_stat}
          alt={apiData && apiData && apiData.name}
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
