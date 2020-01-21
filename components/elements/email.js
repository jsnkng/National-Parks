const Element = ({ title, emailAddress }) => {
  return (
    <div>
      <h4>{title}</h4> 
      <p>
        <a href={`mailto:${emailAddress}`}>
          {emailAddress}
        </a>
      </p>
    </div>
  )
}
export default Element
