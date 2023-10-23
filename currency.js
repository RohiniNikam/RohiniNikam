const number = 6234.56;

// Format the number as a currency string using the toLocaleString() method
const currencyString = number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

console.log(currencyString); // $1,234.56
