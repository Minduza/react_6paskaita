
const Photo = ({photo, title}) => {
  return (
    <div>
        <img src={photo} alt="" />
        <h3>{title}</h3>
    </div>
  )
}

export default Photo