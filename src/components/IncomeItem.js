import React from 'react';
import "./IncomeItem.css";

function IncomeItem({ income, index, removeIncome }) {

    let date = new Date(income.date);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    const removeHandle = i => {
        removeIncome(i);
    };

    return (
        <div className="income-item">
            <div className="desc"> {income.desc} </div>
            <div className="price"> €{income.price} </div>
            <div className="date"> {day + "/" + month + "/" + year } </div>
            <div>
                <button 
                    className="remove-item" 
                    onClick={() => removeHandle(index)} 
                >X</button>
            </div>
        </div>
    )
}

export default IncomeItem;
