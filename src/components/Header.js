import React from 'react';
import './Header.css';

function Header({totalIncome}) {
    return (
        <div>
            <h1 className="total-income">€{totalIncome}</h1>
        </div>
    )
}

export default Header;
