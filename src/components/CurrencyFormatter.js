import React, { useState } from 'react';

const CurrencyFormatter = () => {
    const [currencyCode, setCurrencyCode] = useState('USD'); // Default currency

    const handleCurrencyChange = (event) => {
        setCurrencyCode(event.target.value);
    };

    const selectStyle = {
        fontSize: '1.2rem', // Font size
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginTop: '5px', // Add margin to adjust spacing
    };

    return (
        <div>
            <label>
                Currency:
                <select
                    value={currencyCode}
                    onChange={handleCurrencyChange}
                    style={selectStyle} // Apply the selectStyle
                >
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>
                    <option value="EUR">EUR</option>
                    <option value="INR">INR</option>
                </select>
            </label>
        </div>
    );
};

export default CurrencyFormatter;
