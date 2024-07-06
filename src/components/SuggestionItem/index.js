// Write your code here
import './index.css'

const ListReturn = props => {
  const {listValue, clickChange} = props
  const {suggestion} = listValue
  const changeValue = () => {
    clickChange(suggestion)
  }
  return (
    <li>
      <div className="inner-list-container">
        <p>{suggestion}</p>
        <button className="custom-btn" type="submit" onClick={changeValue}>
          <img
            className="inner-img"
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
            alt="arrow"
          />
        </button>
      </div>
    </li>
  )
}

export default ListReturn
