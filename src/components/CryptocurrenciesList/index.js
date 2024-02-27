// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  state = {isLoading: true, cryptocurrenciesData: []}

  componentDidMount() {
    this.getCryptocurrencyData()
  }

  getCryptocurrencyData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const statusCode = await response.statusCode
    console.log(statusCode)

    const data = await response.json()
    console.log(data)

    this.setState({cryptocurrenciesData: data, isLoading: false})
  }

  render() {
    const {cryptocurrenciesData, isLoading} = this.state
    console.log(isLoading)

    return (
      <div className="list-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <ul>
            {cryptocurrenciesData.map(item => (
              <CryptocurrencyItem cryptocurrencyData={item} key={item.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
