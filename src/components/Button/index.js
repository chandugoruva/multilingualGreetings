import './index.css'

const Button = props => {
  const {each, changedButton, isClickedButton} = props
  const changeButton = () => {
    changedButton(each.id)
  }
  const ButtonBg = isClickedButton ? 'clicked-button' : 'button'
  return (
    <li className="li">
      <button onClick={changeButton} className={ButtonBg} type="button">
        {each.buttonText}
      </button>
    </li>
  )
}
export default Button
