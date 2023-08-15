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
        backgroundColor: '#00FF00', // Green color
        padding: '8px',
        borderRadius: '4px',
        marginBottom: '10px', // Add margin at the bottom
    };

    const greenBoxStyle = {
        backgroundColor: '#00FF00', // Green color
        padding: '8px',
        borderRadius: '4px',
        marginBottom: '-10px', // Add margin at the bottom
    };

    return (
        <div>
            <div style={greenBoxStyle}>
            <label>
                Currency:
                <select
                    value={currencyCode}
                    onChange={handleCurrencyChange}
                    style={selectStyle} // Apply the selectStyle
                >
                    <option value="USD">$ Dollar</option>
                    <option value="GBP">£ Pound</option>
                    <option value="EUR">€ Euro</option>
                    <option value="INR">₹ Rupee</option>
                </select>
            </label>
        </div>
        </div>
    );
};

export default CurrencyFormatter;
