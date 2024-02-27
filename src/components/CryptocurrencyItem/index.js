// Write your JS code here
const CryptocurrencyItem = props => {
  const {cryptocurrencyData} = props
  const {
    id,
    usd_value,
    euro_value,
    currency_name,
    currency_logo,
  } = cryptocurrencyData

  return (
    <li>
      <img src={currency_logo} alt={currency_name} />
      <p>{currency_name}</p>
      <p>{usd_value}</p>
      <p>{euro_value}</p>
    </li>
  )
}

export default CryptocurrencyItem
