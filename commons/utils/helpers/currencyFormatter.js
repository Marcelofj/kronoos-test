const formatCurrencyToBRL = value =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    value
  )

export default formatCurrencyToBRL
