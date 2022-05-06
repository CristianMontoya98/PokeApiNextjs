import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
import styles from '../styles/Home.module.css'
import { Card } from '../components/Card/Card'
import { Detail } from '../components/Detail/Detail';
export default function Home(props) {
  const {pokemonsList } = props;
  const [pokemonList, setPokemonList] = useState(pokemonsList);
  const [pokemon, setPokemon] = useState({ name: "Selecciona un pokemon" });
  const [selected, setSelected] = useState(false);
  return (
    <main className={styles.container}>
      <section>
        <h1>PokeApi</h1>
      </section>
      <section>
        <Detail pokemon={pokemon} selected={selected} />
      </section>
      <section className={styles.cardsContainer} >
        {pokemonList.map((pokemon, index) => <Card key={index} pokemon={pokemon} setPokemon={setPokemon} setSelected={setSelected} />)}
      </section>
    </main>
  )
}

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
