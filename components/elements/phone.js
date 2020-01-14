function formatPhoneNumber(phoneNumberString) {
  const cleaned = phoneNumberString.toString().replace(/\D/g, '')
  const match = cleaned.match(/^1?(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`
  }
  return null
}

const Component = ({ title, phoneNumber }) => {
  return (
    <div>
      <h5>{title}</h5> 
      <p>
        <a href={`tel:${formatPhoneNumber(phoneNumber)}`}>
          {formatPhoneNumber(phoneNumber)}
        </a>
      </p>
    </div>
  )
}
export default Component
