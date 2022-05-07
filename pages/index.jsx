import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
import styles from '../styles/Home.module.css'
import { Card } from '../components/Card/Card'
import { Detail } from '../components/Detail/Detail';

/* Component */
export default function Home(props) {
  const {pokemonsList } = props;
  const [pokemonList, setPokemonList] = useState(pokemonsList);
  const [pokemon, setPokemon] = useState({});
  const [selected, setSelected] = useState(false);
  const colors = {
    fire: "#FF4141",
    grass: "#5DF64E",
    electric: "#F3EA28",
    water: "#51C7FF",
    ground: "#F19D49",
    rock: "#736326",
    fairy: "#E237FF",
    poison: "#39DA5A",
    bug: "#FBBF6A",
    dragon: "#3554CB",
    psychic: "#288766",
    flying: "#F1E9E9",
    fighting: "#E9DEC8",
    normal: "#DBD9D9",
    ghost: "#9B9797",
    ice: "#A1CBC7",
    dark: "#243A3A"
};
  return (
    <main className={styles.container}>
      <section>
        <h1>PokeApi</h1>
      </section>
      <section className={styles.container__visualizer}>
        
      
      <section className={styles.cardsContainer} >
        {pokemonList.map((pokemon, index) => <Card key={index} pokemon={pokemon} setPokemon={setPokemon} setSelected={setSelected} colors={colors} />)}
        </section>
        <div className={styles.container__details}>
          <Detail pokemon={pokemon} selected={selected} colors={colors} />
        </div>
        </section>
    </main>
  )
}

/* Props */
export async function getStaticProps() {
  let pokemonsList = [];
  let data;
  for (let i = 1; i <= 150; i++) { 
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    data = await res.json();
    pokemonsList.push({
      id: data.id,
      name: data.name,
      img: data.sprites.front_default,
      type: data.types[0].type.name
    })  
  }
  return {
    props: {
      pokemonsList
    }
  }
}
