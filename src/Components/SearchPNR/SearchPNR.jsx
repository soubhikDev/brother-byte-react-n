import React from 'react'
import './SearchPNR.css'
import { useNavigate } from 'react-router-dom'
import IRCTC_LOGO from '../../assets/IRCTC_LOGO.png'
import search from '../../assets/search.png'

const tabs = ['Station', 'PNR']

export default function SearchPNR() {
  const [activeTab, setActiveTab] = React.useState('PNR')
  const [searchValue, setSearchValue] = React.useState('')
  const navigate = useNavigate()

  const handleTabClick = (tab) => {
    setActiveTab(tab)
    setSearchValue('')
  }

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value)
  }

  const handleOrderNow = () => {
    const trimmedValue = searchValue.trim()
    if (!trimmedValue) return
    navigate(`/restaurant-pnr?type=${encodeURIComponent(activeTab)}&value=${encodeURIComponent(trimmedValue)}`)
  }

  return (
    <div className="Search_wrpr">
      <div className="search-card">
        <div className="search-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              className={`tab-button ${activeTab === tab ? 'active' : ''}`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="search-content">
          <div className="search-input-wrapper">
            <span className="search-icon"><img src={search} alt="Search" /></span>
            <input
              type="text"
              value={searchValue}
              onChange={handleSearchChange}
              placeholder={`Enter your ${activeTab} here`}
              className="search-field"
            />
          </div>

          <button type="button" className="CommonBTN" onClick={handleOrderNow}>
            ORDER FOOD
          </button>
        </div>
      </div>

      <div className="irctc">
        <span>Most trusted IRCTC authorized e-Catering partner</span>
        <img src={IRCTC_LOGO} alt="IRCTC logo" />
      </div>
    </div>
  )
}
