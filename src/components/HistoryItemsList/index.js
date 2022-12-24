import './index.css'

const HistoryItemsList = props => {
  const {historyList, removeItem} = props
  const {title, logoUrl, timeAccessed, domainUrl} = historyList

  const removeListItem = () => {
    removeItem(title)
  }

  return (
    <li className="history-item">
      <p className="time-access">{timeAccessed}</p>
      <img src={logoUrl} alt="domain logo" className="logo-img" />
      <div className="title-domain-box">
        <p>{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <button type="button" className="delete-btn" onClick={removeListItem}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="d-bin"
        />
      </button>
    </li>
  )
}

export default HistoryItemsList