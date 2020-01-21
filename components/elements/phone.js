function formatPhoneNumber(phoneNumberString) {
  const nospace = phoneNumberString.replace(/\s/g, '')
  const split1 = nospace.split('/')
  const split2 = split1[0].split('x')
  const cleaned = split2[0].toString().replace(/\D/g, '')
  const match = cleaned.match(/^1?(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`
  }
  return null
}

const Component = ({ title, phoneNumber }) => {
  return (
    <div>
      <h4>{title.toLowerCase() === 'voice' ? 'Telephone' : title}</h4> 
      <p>
        <a href={`tel:${formatPhoneNumber(phoneNumber)}`}>
          {formatPhoneNumber(phoneNumber)}
        </a>
      </p>
    </div>
  )
}
export default Component
