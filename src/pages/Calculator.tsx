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

        <div className="waluty">
            {!showTable && (
                <button className='btnCalc' onClick={handleButtonClick}>Pokaż tabelę</button>
            )}
            {showTable && (
                <div>
                    <button className='btnCalc2' onClick={() => setShowTable(false)}>Ukryj tabelę</button>
                    <table>
                        <thead>
                            <tr>
                                <th>Nazwa waluty</th>
                                <th>Kod waluty</th>
                                <th>Kurs średni</th>
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
            )}
            {/* <div className="Kalkulator">
                <button>Calculator</button>
            </div> */}
        </div>

    );
};

export default Calculator;