import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

interface Currency {
    currency: string;
    code: string;
    mid: number;
}

const Calculator: React.FC = () => {

    const [currencies, setCurrencies] = useState<Currency[]>([]);
    const [showTable, setShowTable] = useState(false);

    //kalkulator
    const [fromCurrency, setFromCurrency] = useState<string>('PLN');
    const [toCurrency, setToCurrency] = useState<string>('USD');
    const [amount, setAmount] = useState<number>(0);
    const [convertedAmount, setConvertedAmount] = useState<number>(0);

    useEffect(() => {
        fetchCurrencyData();
    }, []);


    const fetchCurrencyData = async () => {
        try {
            const response = await fetch('http://api.nbp.pl/api/exchangerates/tables/A/');
            const data = await response.json();
            const currencyData: Currency[] = data[0].rates;
            setCurrencies(currencyData);
        } catch (error) {
            console.log('Error fetching currency data:', error);
        }
    };

    const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(event.target.value);
        setAmount(value);
    };

    const handleFromCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFromCurrency(event.target.value);
    };

    const handleToCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setToCurrency(event.target.value);
    };

    const handleConversion = () => {
        const fromCurrencyRate = currencies.find((currency) => currency.code === fromCurrency)?.mid;
        const toCurrencyRate = currencies.find((currency) => currency.code === toCurrency)?.mid;

        if (fromCurrencyRate && toCurrencyRate) {
            const convertedValue = (amount / fromCurrencyRate) * toCurrencyRate;
            setConvertedAmount(convertedValue);
        }
    };






    useEffect(() => {
        if (showTable) {
            fetchData();
        }
    }, [showTable]);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                'http://api.nbp.pl/api/exchangerates/tables/A/'
            );
            const data = response.data[0].rates;
            setCurrencies(data);
        } catch (error) {
            console.error('Wystąpił błąd podczas pobierania danych:', error);
        }
    };

    const handleButtonClick = () => {
        setShowTable(true);
    };

    return (

        // <div className="waluty">
        //     {!showTable && (
        //         <button className='btnCalc' onClick={handleButtonClick}>Show table & calculator</button>
        //     )}
        //     <div className="waluty2">
        //         {showTable && (




        //     <div>
        //         <button className='btnCalc2' onClick={() => setShowTable(false)}>Hide table & calculator</button>
        //         <table>
        //             <thead>
        //                 <tr>
        //                     <th>Nazwa waluty</th>
        //                     <th>Kod waluty</th>
        //                     <th>Kurs średni</th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 {currencies.map((currency) => (
        //                     <tr key={currency.code}>
        //                         <td>{currency.currency}</td>
        //                         <td>{currency.code}</td>
        //                         <td>{currency.mid}</td>
        //                     </tr>
        //                 ))}
        //             </tbody>
        //         </table>
        //     </div>
        //         )}
        // </div>
        // </div >
        <div>
            <h2>Currency Converter</h2>
            <div>
                <label>Amount:</label>
                <input type="number" value={amount} onChange={handleAmountChange} />
            </div>
            <div>
                <label>From:</label>
                <select value={toCurrency} onChange={handleToCurrencyChange}>
                    {currencies.map((currency) => (
                        <option key={currency.code} value={currency.code}>
                            {currency.currency}
                        </option>
                    ))}
                </select>

            </div>
            <div>
                <label>To:</label>
                <select value={fromCurrency} onChange={handleFromCurrencyChange}>
                    {currencies.map((currency) => (
                        <option key={currency.code} value={currency.code}>
                            {currency.currency}
                        </option>
                    ))}
                </select>
            </div>
            <button onClick={handleConversion}>Convert</button>
            {convertedAmount > 0 && (
                <div>
                    <h3>Converted Amount:</h3>
                    <p>{convertedAmount.toFixed(5)}</p>
                </div>
            )}
        </div>
    );
};

export default Calculator;