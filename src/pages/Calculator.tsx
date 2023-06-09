import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

interface Currency {
    currency: string;
    code: string;
    mid: number;
}

const Calculator: React.FC = () => {
    //hidden
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'auto';
        }
    }, []);

    const [currencies, setCurrencies] = useState<Currency[]>([]);
    const [showTable, setShowTable] = useState(false);

    //kalkulator
    const [showCalc, setShowCalc] = useState(false);
    const [toCurrency, setToCurrency] = useState<string>('USD');
    const [fromCurrency, setFromCurrency] = useState<string>('PLN');
    const [amount, setAmount] = useState<number>(0);
    const [convertedAmount, setConvertedAmount] = useState<number>(0);
    const [plnRate, setPlnRate] = useState<number | undefined>(undefined);

    useEffect(() => {
        fetchCurrencyData();
    }, []);


    const fetchCurrencyData = async () => {
        try {
            const response = await fetch('http://api.nbp.pl/api/exchangerates/tables/A/');
            const data = await response.json();
            const currencyData: Currency[] = data[0].rates;
            const plnCurrency = currencyData.find((currency) => currency.code === 'PLN');
            if (plnCurrency) {
                setPlnRate(plnCurrency.mid);
            }

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
        const fromCurrencyRate = fromCurrency === 'PLN' ? 1 : currencies.find((currency) => currency.code === fromCurrency)?.mid;
        const toCurrencyRate = toCurrency === 'PLN' ? 1 : currencies.find((currency) => currency.code === toCurrency)?.mid;

        if (fromCurrencyRate && toCurrencyRate) {
            const convertedValue = (amount / fromCurrencyRate) * toCurrencyRate;
            setConvertedAmount(convertedValue);
        }
    };


    useEffect(() => {
        if (showCalc) {
            fetchData();
        }
    }, [showCalc]);



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
        setShowCalc(true);
    };

    const nav = useNavigate();
    const calc2Handler = () => {
        nav('/Calculator2')
    }

    const nav2 = useNavigate();
    const calc3Handler = () => {
        nav('/Calculator3')
    }

    return (
        //div główny
        <div className="waluty">
            {!showTable && (
                <div className="whichTable">
                    <h1>Which table do you wanna open?</h1>
                    <button className="btnCalc4" onClick={handleButtonClick}>A</button>
                    <button className="btnCalc4" onClick={calc2Handler}>B</button>
                    <button className="btnCalc4" onClick={calc3Handler}>C</button>
                </div>
            )}
            {/* div z tabelą */}

            <div className="waluty2">
                {showTable && (
                    <div>
                        <button className='btnCalc2' onClick={() => setShowTable(false) || setShowCalc(false)}>Hide table & calculator</button>
                        <div className="tabela">
                            <table>
                                <thead>
                                    <tr>
                                        <th><h2>Currency name</h2></th>
                                        <th><h2>Currency code</h2></th>
                                        <th><h2>Average</h2></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currencies.map((currency) => (
                                        <tr key={currency.code}>
                                            <td>{currency.currency}</td>
                                            <td>{currency.code}</td>
                                            <td>{currency.mid}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
                {showCalc && (
                    <div className="calculatorWalutowy">
                        <h2>Currency Converter</h2>
                        <div>
                            <label>Amount:</label>
                            <input className="number" type="number" value={amount} onChange={handleAmountChange} />
                        </div>
                        <div>
                            <label>From:</label>
                            <select className="selectCustom" value={toCurrency} onChange={handleToCurrencyChange}>
                                <option value="PLN">polski złoty</option>
                                {currencies.map((currency) => (
                                    <option key={currency.code} value={currency.code}>
                                        {currency.currency}
                                    </option>
                                ))}
                            </select>

                        </div>
                        <div>
                            <label>To:</label>
                            <select className="selectCustom" value={fromCurrency} onChange={handleFromCurrencyChange}>
                                <option value="PLN">polski złoty</option>
                                {currencies.map((currency) => (
                                    <option key={currency.code} value={currency.code}>
                                        {currency.currency}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button className="btnConvert" onClick={handleConversion}>Convert</button>
                        {convertedAmount > 0 && (
                            <div className="wynik">
                                <h3>Converted Amount:</h3>
                                {toCurrency === 'PLN' ? (
                                    <p>{convertedAmount.toFixed(4)} {fromCurrency}</p>
                                ) : (
                                    <p>{convertedAmount.toFixed(4)} {fromCurrency}</p>
                                )}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div >
    );
};

export default Calculator;