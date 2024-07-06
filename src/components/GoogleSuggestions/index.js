// Write your code here
import {Component} from 'react'
import ListReturn from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {value: '', listValue: undefined}

  changeValue = event => {
    this.setState({value: event.target.value})
  }

  valueSetState = suggestion => {
    this.setState({value: suggestion})
  }

  render() {
    const {value} = this.state
    const {suggestionsList} = this.props
    let {listValue} = this.state
    listValue = suggestionsList
    const searchResults = listValue.filter(eachUser => {
      const lowerCase = eachUser.suggestion.toLowerCase()
      return lowerCase.includes(value)
    })
    return (
      <div className="bg-container">
        <div className="inner-container">
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />
          <div className="search-container">
            <div className="inner-search-container">
              <img
                className="side-img"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
              />
              <input
                type="Search"
                className="input-el"
                value={value}
                onChange={this.changeValue}
                placeholder="Search Google"
              />
            </div>
            <ul className="list-prop">
              {searchResults.map(eachUser => (
                <ListReturn
                  listValue={eachUser}
                  key={eachUser.id}
                  clickChange={this.valueSetState}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
