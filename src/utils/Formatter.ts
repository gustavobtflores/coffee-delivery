const currencyFormat = new Intl.NumberFormat("pt-BR", {
  minimumFractionDigits: 2,
});

export function formatCurrency(value: number) {
  return currencyFormat.format(value);
}
