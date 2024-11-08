import styles from './Form.module.css'

const Form = ({ name, color, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={handleChange}
        placeholder='Ingresa tu nombre'
      />

      <input
        type="text"
        name="color"
        id="color"
        value={color}
        onChange={handleChange}
        placeholder='Ingresa tu color favorito (Formato HEX)'
      />

      <button type='submit'>ENVIAR</button>
    </form>
  )
}

export default Form