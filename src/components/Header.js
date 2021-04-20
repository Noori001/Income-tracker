import React from 'react';
import './Header.css';

function Header({totalIncome}) {
    return (
        <div className="income-header">
            <h2>Income Tracker</h2>
            <h1 className="total-income">€{totalIncome}</h1>
        </div>
    )
}

export default Header;
