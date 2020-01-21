const Element = ({ title, address }) => {
  return (
    <div>
      <h4>{title}</h4>
      <p>
        {address.line1 !== '' &&
        <>
          {address.line1}
          <br />
        </>
        }
        {address.city}, {address.stateCode} {address.postalCode}
      </p>
    </div>
  )
}
export default Element
