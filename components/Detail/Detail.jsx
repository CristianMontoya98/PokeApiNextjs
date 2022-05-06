
import styles from './detail.module.css';
function Detail(props) {
    const { pokemon, selected } = props;
    return (
        <div className={styles.detail}>
            <h2>Details</h2>
            {selected ? <div> <p> { pokemon.id }</p>
            <p>{pokemon.name}</p>
            <img src={pokemon.img} alt={pokemon.name} />
            <p>{pokemon.type}</p> 
                
            </div>
                : <div><p>Seleccione un pokemon</p></div>
            }
            

        </div>
    );
}
export { Detail };