import React from 'react'
import './CurrencyConverterStyle.css'





const CurrencyConverter = () => {
    return (
        <div className="container1">
            <h1>Currency Convertor</h1>
        <div className="box">
            <div className="left_box">
                <select name="currency" className="currency"></select>
                <input type="number" name="" id="num" />
            </div>
            <div className="right_box">
                <select name="currency"  className="currency"></select>
                <input type="text" name="" id="ans" disabled />
            </div>
        </div>
        <button className="btn" id="btn">Convert</button>
        </div>
    )
}

export default CurrencyConverter
