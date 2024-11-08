export function validateName(name) {
  const regex = /^(?!\s)[^\s]{3,}$/
  return regex.test(name)
}

export function validateHexColor(color) {
  const regex = /^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
  return regex.test(color)
}