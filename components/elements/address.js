const Component = ({ title, address }) => {
  return (
    <div>
      <h5>{title}</h5>
      <p style={{fontSize: '95%'}}>
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
export default Component
