export const getCurrencySymbol = (currencyCode) => {
    const currencySymbols = {
        USD: '$',
        GBP: '£',
        EUR: '€',
        INR: '₹',
        // Add more currency symbols as needed
    };

    return currencySymbols[currencyCode] || ''; // Return the corresponding symbol or an empty string if not found
};
