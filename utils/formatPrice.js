export const formatPrice = (value, currency = "INR") =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency }).format(value);
