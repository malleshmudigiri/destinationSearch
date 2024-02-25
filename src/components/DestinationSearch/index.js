// Write your code here

import './index.css'
import DestinationItem from './components/DestinationItem '

const DestinationSearch = props => {
  const {destinationsList} = props

  const {id, name, imgUrl} = destinationsList
  return (
    <div>
      <h1>Destination Search</h1>
      <input type="serach" />
      <ul>
        {destinationsList.map(eachUser => (
          <DestinationItem
            key={eachUser.id}
            imageName={eachUser.name}
            imageUrl={eachUser.imgUrl}
          />
        ))}
      </ul>
    </div>
  )
}

export default DestinationSearch
