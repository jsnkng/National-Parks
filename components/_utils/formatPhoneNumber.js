function formatPhoneNumber(phoneNumberString) {
  const cleaned = phoneNumberString.toString().replace(/\D/g, '')
  const match = cleaned.match(/^1?(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`
  }
  return null
}

export default formatPhoneNumber
