import styles from './Card.module.css'

const Card = ({ name, color }) => {
  return (
    <article className={styles.card}>
      <h2>Hola {name}</h2>
      <p>Sabemos que tu color favorito es:</p>
      <div style={{backgroundColor: `#${color}`}}>
        #{color.toUpperCase()}
      </div>
    </article>
  )
}

export default Card