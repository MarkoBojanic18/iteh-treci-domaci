import React from 'react'
import './CurrencyConverterStyle.css'

// const currencyEl_one = document.getElementById('currency-one');
//     const currencyEl_two = document.getElementById('currency-two');
//     const amountEl_one = document.getElementById('num');
//     const amountEl_two = document.getElementById('ans');
    
//     const rateEl = document.getElementById('rate');
//     const swap = document.getElementById('btn');
    
//     // Fetch exchange rates and update the dome
//     function calculate() {
//       const currency_one = currencyEl_one.value;
//       const currency_two = currencyEl_two.value;
    
//       fetch(`https://v6.exchangerate-api.com/v6/b71ba5a6f69833fe3ac900ec/latest/${currency_one}`)
//         .then((res) => res.json())
//         .then((data) => {
//           //   console.log(data);
//           const rate = data.conversion_rates[currency_two];
//           rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
    
//           amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
//         });
//     }
    
//     // Event Listeners
//     currencyEl_one.addEventListener('change', calculate);
// amountEl_one.addEventListener('input', calculate);
// currencyEl_two.addEventListener('change', calculate);
// amountEl_two.addEventListener('input', calculate);
// swap.addEventListener('click', () => {
//   const temp = currencyEl_one.value;
//   currencyEl_one.value = currencyEl_two.value;
//   currencyEl_two.value = temp;
//   calculate();
// });
    
//     calculate();





const CurrencyConverter = () => {


    const currency = [
        {
         name: 'EUR',
         rate: 1
        },
        {
            name: 'USD',
            rate: 1.141611
        },
        {
            name: 'GBP',
            rate: 0.834786
        },
        {
            name: 'JPY',
            rate: 130.411996
        },
    ];

    function calculate(){
    var rate =  document.getElementById("num").value;
    var currency2 = document.getElementById("currency-two");
    var p = currency2.value;
currency.forEach((eachValue,eachKey)=>{
    console.log(p);
    if(eachValue.name === currency2){
      
        document.getElementById('ans').innerText = rate * eachValue.rate;
    }
});

    
    }


    return (
        <div className="container1">
            <h1>Currency Convertor</h1>
        <div className="box">
            <div className="left_box">
                <select  name="currency" id="currency-one" className="currency">
                <option value="EUR">EUR</option>
          

                </select>
                <input  type="number" placeholder='0' name="" id="num" />
            </div>
            <div className="right_box">
                <select  id="currency-two" name="currency"  className="currency">
                <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="JPY">JPY</option>
                </select>
                <input  type="text" name="" placeholder='0' id="ans" disabled />
            </div>
        </div>
        <button onClick={calculate} className="btn" id="btn">Convert</button>
        <div className="rate" id="rate"></div>
        </div>
    )
}

export default CurrencyConverter
