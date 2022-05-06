import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
import styles from '../styles/Home.module.css'

export default function Home(props) {
  const {pokemonsList } = props;
  const [pokemonList, setPokemonList] = useState(pokemonsList);
  console.log(pokemonsList);
  
  return (
    <>
      
      <h1>PokeApi</h1>
      
      {pokemonList.map((pokemon, index) => <h2 key={index}>{pokemon.name}</h2> )}
    </>
  )
}

export async function getStaticProps() {
  let pokemonsList = [];
  let list = [];
  let data;
  for (let i = 1; i <= 5; i++) { 
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
