const Component = ({ title, emailAddress }) => {
  return (
    <div>
      <h5>{title}</h5> 
      <p>
        <a href={`mailto:${emailAddress}`}>
          {emailAddress}
        </a>
      </p>
    </div>
  )
}
export default Component
