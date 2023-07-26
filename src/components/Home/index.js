import {useState} from 'react'
import './index.css'
import Button from '../Button'

const Home = props => {
  const {languageGreetingsList} = props
  const [isClickedId, setClicked] = useState(languageGreetingsList[0].id)
  const changedButton = id => {
    setClicked(id)
  }
  const ClickedImage = () => {
    const {imageUrl, imageAltText} = languageGreetingsList[
      languageGreetingsList.findIndex(each => each.id === isClickedId)
    ]
    return <img src={imageUrl} alt={imageAltText} className="image" />
  }
  return (
    <div className="main-div">
      <h1>Multilingual Greetings</h1>
      <ul className="ul">
        {languageGreetingsList.map(each => (
          <Button
            each={each}
            key={each.id}
            changedButton={changedButton}
            isClickedButton={each.id === isClickedId}
          />
        ))}
      </ul>
      {ClickedImage()}
    </div>
  )
}
export default Home
