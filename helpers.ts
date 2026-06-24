export function getFormattedPrice(
  price: number,
  options: { currency?: string; divider?: number; locale?: string } = {},
) {
  const {
    currency = "EUR",
    divider = 100,
    locale = document.documentElement.lang || "de-DE",
  } = options;

  return new Intl.NumberFormat(locale, { currency, style: "currency" }).format(
    price / divider,
  );
}
