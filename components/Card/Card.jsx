
import styles from './card.module.css'
function Card(props) { 
    const { pokemon, setPokemon, setSelected, colors } = props;
    
    
    const openCard = () => {
        setSelected(true);
        setPokemon(pokemon);
    }
    return (
        <div className={styles.card} style={{ backgroundColor: colors[pokemon.type] }} onClick={()=>openCard()}>
        <p className={styles.card__id}>{pokemon.id}</p>
        <div className={styles.imgContainer}>
          <img src={pokemon.img} alt={pokemon.name} />
        </div>
        <p>{pokemon.name}</p>
      </div>
    )

}
export { Card };