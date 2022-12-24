import './index.css'

const HistoryItemsList = props => {
  const {historyList, removeItem} = props
  const {id, title, logoUrl, timeAccessed, domainUrl} = historyList

  const removeListItem = () => {
    removeItem(id)
  }

  return (
    <li className="history-item">
      <p className="time-access">{timeAccessed}</p>
      <img src={logoUrl} alt="domain logo" className="logo-img" />
      <div className="title-domain-box">
        <p>{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <button
        testid="delete"
        type="button"
        className="delete-btn"
        onClick={removeListItem}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="d-bin"
          testid="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItemsList
