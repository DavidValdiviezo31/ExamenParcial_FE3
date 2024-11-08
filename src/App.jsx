import { useState } from 'react'
import './App.css'
import { validateHexColor, validateName } from './utils/validations'
import Form from './components/form/Form'
import Card from './components/card/Card'

const INITIAL_DATA = {
  name: '',
  color: ''
}

const App = () => {
  const [formData, setFormData] = useState(INITIAL_DATA)
  const [error, setError] = useState(true)
  const [isSubmitted, setIsSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const { name, color } = formData
    validateName(name) && validateHexColor(color) ? setError(false) : setError(true)
    setIsSubmitted(true)
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    setIsSubmitted(false)
  }

  return (
    <main>
      <h1>Elige un color</h1>

      <Form
        name={formData.name}
        color={formData.color}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      {error && isSubmitted && <p>Por favor chequea que la información sea correcta.</p>}
      {!error && isSubmitted && (
        <Card name={formData.name} color={formData.color} />
      )}
    </main>
  )
}

export default App