import styles from "./detail.module.css";
function Detail(props) {
  const { pokemon, selected, colors } = props;
  return (
      <div className={`${selected ? styles.detail_pokedex : styles.hide}`}>
           <div className={styles.detail__case}>
          <div className={styles.detail__whiteCircle}>
            <div className={styles.detail__blueCircle}></div>
              </div>
              <div className={styles.detail__littleCircles}>
                  <div className={`${styles.detail__littleCircles_circle} ${styles.red}`}></div>
                  <div className={`${styles.detail__littleCircles_circle} ${styles.yellow}`}></div>
                  <div className={`${styles.detail__littleCircles_circle} ${styles.green}`}></div>
              </div>
              </div>
      <div className={styles.detail}>
             
              
          <div
            className={styles.detail__image}
            style={{ backgroundColor: colors[pokemon.type] }}
          >
            <img src={pokemon.img} alt={pokemon.name} />
          </div>
          <div className={styles.detail__info}>
            <p>Numero: {pokemon.id}</p>
            <p>Nombre: {pokemon.name}</p>
            <p>Tipo: {pokemon.type}</p>
          </div>
        </div>
      </div>
    
  );
}
export { Detail };
