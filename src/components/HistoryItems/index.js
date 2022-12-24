import {Component} from 'react'

import HistoryItemsList from '../HistoryItemsList'

import './index.css'

class HistoryItems extends Component {
  state = {searchValue: '', historyListItems: null, removeIds: ''}

  updateChange = event => {
    this.setState({searchValue: event.target.value})
  }

  removeItem = value => {
    this.setState(prevState => ({
      removeIds: [...prevState.removeIds, value],
    }))
  }

  render() {
    const {initialHistoryList} = this.props
    const {searchValue, removeIds} = this.state
    let {historyListItems} = this.state
    const text = 'There is no history to show'
    let allItems

    console.log(removeIds)

    if (historyListItems === null) {
      historyListItems = initialHistoryList
    }

    if (searchValue) {
      allItems = historyListItems.filter(eachItem => {
        const tempItem = eachItem.title.toLowerCase()

        return tempItem.includes(searchValue.toLowerCase())
      })
    } else {
      allItems = historyListItems
    }

    if (removeIds) {
      allItems = allItems.filter(eachItem =>
        removeIds.every(item => item !== eachItem.id),
      )
    }
    return (
      <div>
        <div className="input-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="history-img"
          />

          <div className="input-box">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-img"
            />
            <input
              type="search"
              onChange={this.updateChange}
              className="search-input"
              placeholder="Search history"
            />
          </div>
        </div>

        <div className="history-container">
          {allItems.length > 0 ? (
            <ul className="history-items-box">
              {allItems.map(eachItem => (
                <HistoryItemsList
                  key={eachItem.id}
                  historyList={eachItem}
                  removeItem={this.removeItem}
                />
              ))}
            </ul>
          ) : (
            <p className="empty-text">{text}</p>
          )}
        </div>
      </div>
    )
  }
}

export default HistoryItems
