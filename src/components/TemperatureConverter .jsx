import React from 'react'
import { useState } from 'react';


function ConvertIndia({ currency, onCurrencyChange }) {
  console.log("india : ",currency)

  const indian =  currency !='' ? (parseFloat(currency) /80) : '';
  //const indian = converted / 80;

  const handleChange = (e) => {
    onCurrencyChange(e.target.value);
  };

  return (
    <div>
      <label>
        india:
        <input
          type="text"
          value={currency}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}
// {celsius.toFixed(2)}
function ConvertUS({ usCurrency, onCurrencyChange }) {
  console.log("us : ",usCurrency)
  //const us = usCurrency !='' ? (parseFloat(usCurrency) * 80) : '' ;
  //const us = converted * 80;

  function handleChange(e){
    onCurrencyChange(e.target.value)
  }

  return (
    <div>
     <label>
        US:
        <input
          type="text"
          value={usCurrency}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}


function TemperatureConverter() {
  const [currency, setCurrency] = useState(1);
  const num=currency/83.80
  const [usCurrency,setUsCurrency]=useState(Math.round(num*1000)/1000)

  const handleCurrencyChange = (currencyPassed) => {
    const num=currencyPassed/83.80;
    setCurrency(currencyPassed);
    setUsCurrency(Math.round((currencyPassed/83.80)*100)/100);
  };

  const covertUScur=(currencyPassed)=>{
    const num=currencyPassed*83.80;
    setUsCurrency(currencyPassed);
    setCurrency(Math.round((currencyPassed*83.80)*100)/100);
  }

  return (
    <div>
      <ConvertIndia currency={currency} onCurrencyChange={handleCurrencyChange}
      />
      <ConvertUS usCurrency={usCurrency}  onCurrencyChange={covertUScur} />
    </div>
  );
}

export default TemperatureConverter;