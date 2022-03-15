import './index.css'

const TabItemPrefer = props => {
  const {everyItem, selectedThisTab, isActive} = props
  const {displayText, tabId} = everyItem
  const setTheAction = () => selectedThisTab(tabId)

  const tabBtnClassName = isActive ? 'tab-button active' : 'tab-button'

  return (
    <li className="tab-item" key={tabId}>
      <button className={tabBtnClassName} type="button" onClick={setTheAction}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItemPrefer
