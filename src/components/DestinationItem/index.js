// Write your code here
import './index.css'

const DestinationItem = props => {
  const {imageUrl, imageName} = props

  return (
    <li>
      <img src={imageUrl} className="image" />
      <p>{imageName}</p>
    </li>
  )
}

export default DestinationItem
