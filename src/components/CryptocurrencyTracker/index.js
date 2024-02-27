// Write your code here
// Write your JS code here
import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

const CryptocurrencyTracker = () => (
  <div>
    <h1>Cryptocurrency Tracker</h1>
    <img
      src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
      alt="cryptocurrency"
    />
    <CryptocurrenciesList />
  </div>
)

export default CryptocurrencyTracker
