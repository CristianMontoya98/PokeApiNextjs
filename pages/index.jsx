import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
import styles from '../styles/Home.module.css'

export default function Home(props) {
  const { initialPokemonList } = props;
  const [pokemonList, setPokemonList] = useState(initialPokemonList);
  console.log(initialPokemonList);
  return (
    <>
      <h1>PokeApi</h1>
    </>
  )
}

export async function getServerSideProps() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50');
  const initialPokemonList = await response.json();
  return {
    props: {
      initialPokemonList
    }
  }
}
