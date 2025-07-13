// src/utils/currency.js
export const fetchUsdToInrRate = async () => {
  // 1 network request, returns a single number
  const res = await fetch(
    'https://api.exchangerate.host/latest?base=USD&symbols=INR'
  );
  const data = await res.json();
  return data?.rates?.INR ?? 83.25; // fallback if API fails
};

export const usdToInr = (usd, rate) =>
  Number((usd * rate).toFixed(2)); // keep 2‑dp; returns a plain Numbers