export function formatCurrency(value: number, currency: string | null = null) {
  const options = currency
    ? { style: "currency", currency, minimumFractionDigits: 2 }
    : { minimumFractionDigits: 2 };

  const currencyFormat = new Intl.NumberFormat("pt-BR", options);

  return currencyFormat.format(value);
}
