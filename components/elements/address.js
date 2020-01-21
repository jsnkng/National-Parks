const Component = ({ title, address }) => {
  return (
    <div>
      <h4>{title}</h4>
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
