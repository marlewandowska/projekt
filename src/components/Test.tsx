import { useState } from "react";

const Test: React.FC = () => {
    const [number, setNumber] = useState(0); // Stan przechowujący numer
  
    // Funkcje modyfikujące numer
    const increment = () => setNumber(number + 1);
    const decrement = () => setNumber(number - 1);
    const incrementBy5 = () => setNumber(number + 5);
    const decrementBy5 = () => setNumber(number - 5);
  
    return (
      <div>
        <h1><DisplayNumber number={number} /></h1> 
        <Button onClick={increment} text="+1" /> 
        <Button onClick={decrement} text="-1" /> 
        <Button onClick={incrementBy5} text="+5" /> 
        <Button onClick={decrementBy5} text="-5" /> 
      </div>
    );
  };
  
  // Komponent DisplayNumber
  interface DisplayNumberProps {
    number: number;
  }
  
  const DisplayNumber: React.FC<DisplayNumberProps> = ({ number }) => {
    return <p>{number}</p>;
  };
  
  // Komponent Button
  interface ButtonProps {
    onClick: () => void;
    text: string;
  }
  
  const Button: React.FC<ButtonProps> = ({ onClick, text }) => {
    return <button style={{padding: 5}} onClick={onClick}>{text}</button>;
  };

export {Test}


// napisac aplikacje ktora przechowuje numer, niech ten numer jest wyswietlany niech sa 4 przyciski ktore modyfikuja ten numer +1 -1 +5 -5 
// niech tez jest input ktory przyjmuje tylko numery i po klikniecu w przycisk modyfikuje wyswietlany numer, oddzielny komponent 